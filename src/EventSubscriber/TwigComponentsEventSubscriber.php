<?php

namespace Drupal\twig_components\EventSubscriber;

use Drupal\Core\Render\HtmlResponse;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use TwigComponentsSSR\Renderer;

/**
 * Response subscriber to handle HTML responses.
 */
class TwigComponentsEventSubscriber implements EventSubscriberInterface {

  /**
   * Server side renders twig components in HtmlResponse responses.
   *
   * @param \Symfony\Component\HttpKernel\Event\FilterResponseEvent $event
   *   The event to process.
   */
  public function onRespond(FilterResponseEvent $event) {
    $response = $event->getResponse();
    if (!$response instanceof HtmlResponse) {
      return;
    }
    $tag_templates = [];
    $paths = [];
    $libraries = [];
    /** @var \Drupal\twig_components\TwigComponentPluginManager $manager */
    $manager = \Drupal::service('plugin.manager.twig_component');
    foreach ($manager->getDefinitions() as $plugin_id => $definition) {
      /** @var \Drupal\twig_components\TwigComponentInterface $instance */
      $instance = $manager->createInstance($plugin_id, $definition);
      $tag_templates[$definition['tag']] = basename($definition['template_path']);
      $paths[] = $definition['base_path'] . '/' . dirname($definition['template_path']);
      $libraries[$definition['tag']] = $instance->getLibraryName();
    }
    $content = $response->getContent();
    $loader = new \Twig_Loader_Filesystem($paths, DRUPAL_ROOT);
    $environment = new \Twig_Environment($loader);
    $renderer = new Renderer($tag_templates, $environment);
    $content = $renderer->render($content);
    $libraries = array_intersect_key($libraries, array_flip($renderer->getRenderedTags()));
    $response->addAttachments(['library' => array_values($libraries)]);
    // Remove automatically closed Big Pipe tags from the response.
    $content = str_replace([
      '</nojs-bigpipe-placeholder-styles-placeholder>',
      '</nojs-bigpipe-placeholder-scripts-placeholder>',
    ], '', $content);
    $response->setContent($content);
    $event->setResponse($response);
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    // This needs to run before attachments are processed.
    $events[KernelEvents::RESPONSE][] = ['onRespond', 1];
    return $events;
  }

}
