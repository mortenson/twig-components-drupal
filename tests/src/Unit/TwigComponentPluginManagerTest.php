<?php

namespace Drupal\Tests\twig_components\Unit;

use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\DependencyInjection\ContainerBuilder;
use Drupal\Core\Extension\Extension;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Extension\ThemeHandlerInterface;
use Drupal\Tests\UnitTestCase;
use Drupal\twig_components\TwigComponentPluginManager;
use org\bovigo\vfs\vfsStream;
use Prophecy\Argument;

/**
 * @coversDefaultClass \Drupal\twig_components\TwigComponentPluginManager
 * @group twig_components
 */
class TwigComponentPluginManagerTest extends UnitTestCase {

  /**
   * The module handler.
   *
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected $moduleHandler;

  /**
   * The theme handler.
   *
   * @var \Drupal\Core\Extension\ThemeHandlerInterface
   */
  protected $themeHandler;

  /**
   * Cache backend instance.
   *
   * @var \Drupal\Core\Cache\CacheBackendInterface
   */
  protected $cacheBackend;

  /**
   * The Twig Component plugin manager.
   *
   * @var \Drupal\twig_components\TwigComponentPluginManager
   */
  protected $twigComponentManager;

  /**
   * {@inheritdoc}
   */
  protected function setUp() {
    parent::setUp();

    $this->setUpFilesystem();

    $container = new ContainerBuilder();
    $container->set('string_translation', $this->getStringTranslationStub());
    \Drupal::setContainer($container);

    $this->moduleHandler = $this->prophesize(ModuleHandlerInterface::class);

    $this->moduleHandler->moduleExists('module_a')->willReturn(TRUE);
    $this->moduleHandler->moduleExists('module_b')->willReturn(TRUE);
    $this->moduleHandler->moduleExists('theme_a')->willReturn(FALSE);
    $this->moduleHandler->moduleExists('core')->willReturn(FALSE);
    $this->moduleHandler->moduleExists('invalid_provider')->willReturn(FALSE);

    $module_a = new Extension('/', 'module', vfsStream::url('root/modules/module_a/module_a.info.yml'));
    $module_b = new Extension('/', 'module', vfsStream::url('root/modules/module_b/module_b.info.yml'));
    $this->moduleHandler->getModule('module_a')->willReturn($module_a);
    $this->moduleHandler->getModule('module_b')->willReturn($module_b);
    $this->moduleHandler->getModuleDirectories()->willReturn([
      'module_a' => vfsStream::url('root/modules/module_a'),
      'module_b' => vfsStream::url('root/modules/module_b'),
    ]);
    $this->moduleHandler->alter('twig_component', Argument::type('array'))->shouldBeCalled();

    $this->themeHandler = $this->prophesize(ThemeHandlerInterface::class);

    $this->themeHandler->themeExists('theme_a')->willReturn(TRUE);
    $this->themeHandler->themeExists('core')->willReturn(FALSE);
    $this->themeHandler->themeExists('invalid_provider')->willReturn(FALSE);

    $theme_a = new Extension('/', 'theme', vfsStream::url('root/themes/theme_a/theme_a.info.yml'));
    $this->themeHandler->getTheme('theme_a')->willReturn($theme_a);
    $this->themeHandler->getThemeDirectories()->willReturn(['theme_a' => vfsStream::url('root/themes/theme_a')]);

    $this->cacheBackend = $this->prophesize(CacheBackendInterface::class);

    $namespaces = new \ArrayObject(['Drupal\module_b' => vfsStream::url('root/modules/module_b/src')]);
    $this->twigComponentManager = new TwigComponentPluginManager($namespaces, $this->cacheBackend->reveal(), $this->moduleHandler->reveal(), $this->themeHandler->reveal());
  }

  /**
   * @covers ::getDefinitions
   * @covers ::providerExists
   */
  public function testGetDefinitions() {
    $expected = [
      'module_a_provided_component',
      'theme_a_provided_component',
      'plugin_provided_component',
    ];

    $twig_components = $this->twigComponentManager->getDefinitions();
    $this->assertEquals($expected, array_keys($twig_components));
  }

  /**
   * @covers ::processDefinition
   */
  public function testProcessDefinition() {
    $twig_components = $this->twigComponentManager->getDefinitions();
    $this->assertEquals($twig_components['module_a_provided_component']['base_path'], vfsStream::url('root/modules/module_a'));
    $this->assertEquals($twig_components['theme_a_provided_component']['base_path'], vfsStream::url('root/themes/theme_a'));
    $this->assertEquals($twig_components['plugin_provided_component']['base_path'], vfsStream::url('root/modules/module_b'));
  }

  /**
   * Sets up the filesystem with YAML files and annotated plugins.
   */
  protected function setUpFilesystem() {
    $module_a_provided_component = <<<'EOS'
module_a_provided_component:
  tag: module-a
  js_path: components/module_a.js
  template_path: components/module_a.twig
EOS;
    $theme_a_provided_component = <<<'EOS'
theme_a_provided_component:
  tag: theme-a
  js_path: components/theme_a.js
  template_path: components/theme_a.twig
EOS;
    $plugin_provided_component = <<<'EOS'
<?php
namespace Drupal\module_b\Plugin\TwigComponent;

use Drupal\twig_components\TwigComponentDefault;

/**
 * @TwigComponent(
 *   id = "plugin_provided_component",
 *   tag = "module-b",
 *   js_path = "components/module_b.js",
 *   template_path = "components/module_b.twig"
 * )
 */
class TestTwigComponent extends TwigComponentDefault {}
EOS;
    vfsStream::setup('root');
    vfsStream::create([
      'modules' => [
        'module_a' => [
          'module_a.twig_components.yml' => $module_a_provided_component,
        ],
        'module_b' => [
          'src' => [
            'Plugin' => [
              'TwigComponent' => [
                'TestTwigComponent.php' => $plugin_provided_component,
              ],
            ],
          ],
        ],
      ],
      'themes' => [
        'theme_a' => [
          'theme_a.twig_components.yml' => $theme_a_provided_component,
        ],
      ],
    ]);
  }

}
