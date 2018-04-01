<?php

namespace Drupal\twig_components_test\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Provides route controller for Twig Components Test.
 */
class TwigComponentsTestController extends ControllerBase {

  /**
   * Returns a render array for this page.
   */
  public function testPage() {
    return [
      '#markup' => '<test-tag name="World"></test-tag>',
      '#allowed_tags' => ['test-tag'],
    ];
  }

}
