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
   * Gets the library name for this Twig Component.
   *
   * @return string
   *   The library name for this Twig Component.
   */
  public function getLibraryName();

  /**
   * Gets the full path to the JS for this Twig Component.
   *
   * @return string
   *   The full path to the JS for this Twig Component.
   */
  public function getFullJsPath();

  /**
   * Gets the full path to the template for this Twig Component.
   *
   * @return string
   *   The full path to the template for this Twig Component.
   */
  public function getFullTemplatePath();

}
