/**
 * @file
 * Ensures that twig components are properly loaded into CKEditor.
 */

(function (Drupal, CKEDITOR, $) {

  "use strict";

  /**
   * Behaviors related to CKEditor.
   */
  Drupal.behaviors.twigComponentCKEditor = {
    attach: function (context, settings) {
      for (var i in CKEDITOR.instances) {
        if (CKEDITOR.instances[i].twigComponentsProcessed) {
          continue;
        }
        else {
          CKEDITOR.instances[i].twigComponentsProcessed = true;
        }
        CKEDITOR.instances[i].on('contentDom', function () {
          var iframeDoc = CKEDITOR.instances[i].document.$;
          var wrapper = iframeDoc.createElement('div');
          wrapper.innerHTML = settings.twigComponentsCKEditorScripts;
          [].forEach.call(wrapper.childNodes, function (child) {
            if (child.tagName === 'SCRIPT') {
              var script = iframeDoc.createElement('script');
              script.src = child.src;
              script.async = false;
              iframeDoc.head.appendChild(script);
            }
            else {
              iframeDoc.head.appendChild(child.cloneNode());
            }
          });
        });
      }
    }
  };

}(Drupal, CKEDITOR, jQuery));
