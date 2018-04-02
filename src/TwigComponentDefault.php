<?php

namespace Drupal\twig_components;

use Drupal\Core\Plugin\PluginBase;

/**
 * Provides a default class for Twig Component plugins.
 */
class TwigComponentDefault extends PluginBase implements TwigComponentInterface {

  /**
   * {@inheritdoc}
   */
  public function getLibraryDefinition() {
    $definition = [
      'version' => 'VERSION',
      'js' => [
        $this->getFullJsPath() => [],
      ],
      'dependencies' => [
        'twig_components/webcomponentsjs',
        'twig_components/twigjs',
      ],
    ];
    return $definition;
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraryName() {
    return 'twig_components/component.' . $this->configuration['id'];
  }

  /**
   * {@inheritdoc}
   */
  public function getFullJsPath() {
    if ($this->configuration['js_path'][0] === '/') {
      return $this->configuration['js_path'];
    }
    return '/' . $this->configuration['base_path'] . '/' . $this->configuration['js_path'];
  }

  /**
   * {@inheritdoc}
   */
  public function getFullTemplatePath() {
    if ($this->configuration['template_path'][0] === '/') {
      return $this->configuration['template_path'];
    }
    return '/' . $this->configuration['base_path'] . '/' . $this->configuration['template_path'];
  }

}
