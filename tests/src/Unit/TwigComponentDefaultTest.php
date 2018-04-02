<?php

namespace Drupal\Tests\twig_components\Unit;

use Drupal\Tests\UnitTestCase;
use Drupal\twig_components\TwigComponentDefault;

/**
 * @coversDefaultClass \Drupal\twig_components\TwigComponentDefault
 * @group twig_components
 */
class TwigComponentDefaultTest extends UnitTestCase {

  /**
   * @covers ::getLibraryDefinition
   * @covers ::getLibraryName
   */
  public function testBuild() {
    $twig_component = new TwigComponentDefault([
      'id' => 'module_a_component',
      'base_path' => 'modules/module_a',
      'js_path' => 'components/module_a.js',
      'template_path' => 'components/module_a.twig',
    ], '', []);
    $this->assertSame($twig_component->getLibraryName(), 'twig_components/component.module_a_component');
    $this->assertSame(key($twig_component->getLibraryDefinition()['js']), '/modules/module_a/components/module_a.js');
    $this->assertSame($twig_component->getFullTemplatePath(), '/modules/module_a/components/module_a.twig');
    $this->assertSame($twig_component->getFullJsPath(), '/modules/module_a/components/module_a.js');
    // Test that root-level paths work.
    $twig_component = new TwigComponentDefault([
      'id' => 'module_a_component',
      'base_path' => 'modules/module_a',
      'js_path' => '/components/module_a.js',
      'template_path' => '/components/module_a.twig',
    ], '', []);
    $this->assertSame(key($twig_component->getLibraryDefinition()['js']), '/components/module_a.js');
    $this->assertSame($twig_component->getFullTemplatePath(), '/components/module_a.twig');
    $this->assertSame($twig_component->getFullJsPath(), '/components/module_a.js');
  }

}
