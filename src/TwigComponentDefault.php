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
      'js' => [
        '/' . $this->configuration['base_path'] . '/' . $this->configuration['js_path'] => [],
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

}
