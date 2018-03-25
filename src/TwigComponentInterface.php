<?php

namespace Drupal\twig_components;

use Drupal\Component\Plugin\DerivativeInspectionInterface;
use Drupal\Component\Plugin\PluginInspectionInterface;

/**
 * Provides an interface for static Twig Component plugins.
 */
interface TwigComponentInterface extends PluginInspectionInterface, DerivativeInspectionInterface {

  /**
   * Gets the library definition for this Twig Component.
   *
   * @return array
   *   An array appropriate for use in hook_library_info_build().
   */
  public function getLibraryDefinition();

  /**
   * Attaches required libraries to the given render array.
   *
   * @param array &$build
   *   A render array the component will be rendered in.
   */
  public function attachToBuild(array &$build);

}
