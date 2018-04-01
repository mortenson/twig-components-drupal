<?php

namespace Drupal\Tests\twig_components\Functional;

use Drupal\Tests\BrowserTestBase;

/**
 * @coversDefaultClass \Drupal\twig_components\EventSubscriber\TwigComponentsEventSubscriber
 * @group twig_components
 */
class TwigComponentsEventSubscriberTest extends BrowserTestBase {

  /**
   * {@inheritdoc}
   */
  public static $modules = ['twig_components_test'];

  /**
   * Tests that components are server-side rendered and libraries attached.
   *
   * @see \Drupal\twig_components_test\Controller\TwigComponentsTestController::testPage
   */
  public function testEventSubscriber() {
    $this->drupalGet('/twig-components-test');
    $assert_session = $this->assertSession();
    $custom_element = $assert_session->elementExists('css', 'test-tag');
    $this->assertContains('Hello World!', $custom_element->getHtml());
    $assert_session->elementExists('css', 'script[src*="twig_components_test/components/test-tag.js"]');
  }

}
