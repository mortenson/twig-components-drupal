/**
 * @file
 * Ensures that twig components are properly loaded into CKEditor.
 */

(function (settings, CKEDITOR) {

  "use strict";

  function attachScripts (editor) {
    if (!settings.twigComponentsCKEditorScripts) {
      return;
    }
    var iframeDoc = editor.document.$;
    for (var tag_name in settings.twigComponentsCKEditorScripts) {
      if (iframeDoc.getElementsByTagName(tag_name).length) {
        var wrapper = iframeDoc.createElement('div');
        wrapper.innerHTML = settings.twigComponentsCKEditorScripts[tag_name];
        [].forEach.call(wrapper.childNodes, function (child) {
          if (child.tagName === 'SCRIPT') {
            if (child.src && !iframeDoc.querySelectorAll('[src="' + child.src + '"]').length) {
              var script = iframeDoc.createElement('script');
              script.src = child.src;
              script.async = false;
              iframeDoc.head.appendChild(script);
            }
          }
          else {
            iframeDoc.head.appendChild(child.cloneNode());
          }
        });
      }
    }
  }

  CKEDITOR.on('instanceReady', function (event) {
    var editor = event.editor;
    editor.on('change', function () {
      setTimeout(attachScripts, 0, editor);
    });
    editor.on('contentDom', function () {
      setTimeout(attachScripts, 0, editor);
    });
    setTimeout(attachScripts, 0, editor);
  });

}(drupalSettings, CKEDITOR));
