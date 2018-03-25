<?php

namespace Drupal\twig_components\Annotation;

use Drupal\Component\Annotation\Plugin;
use Drupal\twig_components\TwigComponentDefault;

/**
 * Defines a Twig Component annotation object.
 *
 * Twig Component plugins define basic information about the component, which
 * is useful for server side rendering and library generation.
 *
 * @Annotation
 */
class TwigComponent extends Plugin {

  /**
   * The plugin ID.
   *
   * @var string
   */
  public $id;

  /**
   * The tag name.
   *
   * @var string
   */
  public $tag;

  /**
   * The file path to the code for this component.
   *
   * @var string
   */
  public $js_path;

  /**
   * The file path to the Twig template for this component.
   *
   * @var string
   */
  public $template_path;

  /**
   * The Twig Component class.
   *
   * This default value is used for plugins defined in twig_components.yml that
   * do not specify a class themselves.
   *
   * @var string
   */
  public $class = TwigComponentDefault::class;

}
