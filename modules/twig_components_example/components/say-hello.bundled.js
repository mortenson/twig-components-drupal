/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/say-hello.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/say-hello.js":
/*!*********************************!*\
  !*** ./components/say-hello.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _twigBase = __webpack_require__(/*! twig-components/twig-base */ \"./node_modules/twig-components/twig-base.js\");\n\nvar _twigBase2 = _interopRequireDefault(_twigBase);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SayHello = function (_TwigBase) {\n  _inherits(SayHello, _TwigBase);\n\n  function SayHello() {\n    _classCallCheck(this, SayHello);\n\n    return _possibleConstructorReturn(this, (SayHello.__proto__ || Object.getPrototypeOf(SayHello)).apply(this, arguments));\n  }\n\n  _createClass(SayHello, [{\n    key: 'renderTemplate',\n    value: function renderTemplate(variables) {\n      return __webpack_require__(/*! ./say-hello.twig */ \"./components/say-hello.twig\")(variables);\n    }\n  }], [{\n    key: 'observedAttributes',\n    get: function get() {\n      return ['name'];\n    }\n  }]);\n\n  return SayHello;\n}(_twigBase2.default);\n\nif (!window.customElements.get('say-hello')) {\n  window.customElements.define('say-hello', SayHello);\n}\n\n//# sourceURL=webpack:///./components/say-hello.js?");

/***/ }),

/***/ "./components/say-hello.twig":
/*!***********************************!*\
  !*** ./components/say-hello.twig ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var twig = __webpack_require__(/*! twig */ \"twig\").twig,\n    template = twig({id:\"7b582078e89e36e2b32c5bfd74bdf800d206a18095a1fbe963e7ed425ef002e99323499d5640d95fd9e42c7529676944dc7743eab2f20574b1ce8d3425856a1f\", data:[{\"type\":\"raw\",\"value\":\"<style>\\n  :host {\\n    display: block;\\n  }\\n  p {\\n    font-size: 16px;\\n    font-family: Arial, \\\"Helvetica Neue\\\", Helvetica, sans-serif;\\n  }\\n</style>\\n<p>Hello \"},{\"type\":\"output\",\"stack\":[{\"type\":\"Twig.expression.type.variable\",\"value\":\"name\",\"match\":[\"name\"]},{\"type\":\"Twig.expression.type.filter\",\"value\":\"escape\",\"match\":[\"| escape\",\"escape\"]}]},{\"type\":\"raw\",\"value\":\"!</p>\\n\"}], allowInlineIncludes: true, rethrow: true});\n\nmodule.exports = function(context) { return template.render(context); }\n\n//# sourceURL=webpack:///./components/say-hello.twig?");

/***/ }),

/***/ "./node_modules/twig-components/twig-base.js":
/*!***************************************************!*\
  !*** ./node_modules/twig-components/twig-base.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _twig = __webpack_require__(/*! twig */ \"twig\");\n\nvar _twig2 = _interopRequireDefault(_twig);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TwigBase = function (_HTMLElement) {\n  _inherits(TwigBase, _HTMLElement);\n\n  _createClass(TwigBase, null, [{\n    key: 'observedAttributes',\n    get: function get() {\n      return [];\n    }\n  }]);\n\n  function TwigBase() {\n    _classCallCheck(this, TwigBase);\n\n    var _this = _possibleConstructorReturn(this, (TwigBase.__proto__ || Object.getPrototypeOf(TwigBase)).call(this));\n\n    _this.attachShadow({ mode: 'open' });\n    return _this;\n  }\n\n  _createClass(TwigBase, [{\n    key: 'connectedCallback',\n    value: function connectedCallback() {\n      if (this.dataset.ssrContent) {\n        this.innerHTML = JSON.parse(this.dataset.ssrContent);\n      }\n      this.render();\n    }\n  }, {\n    key: 'attributeChangedCallback',\n    value: function attributeChangedCallback() {\n      this.render();\n    }\n  }, {\n    key: 'getTemplate',\n    value: function getTemplate() {\n      return '';\n    }\n  }, {\n    key: 'getTemplateVariables',\n    value: function getTemplateVariables() {\n      var _this2 = this;\n\n      var attributes = {};\n      this.constructor.observedAttributes.forEach(function (attribute) {\n        if (_this2.hasAttribute(attribute)) {\n          attributes[attribute.replace('-', '_')] = _this2.getAttribute(attribute);\n        }\n      });\n      return attributes;\n    }\n  }, {\n    key: 'renderTemplate',\n    value: function renderTemplate(variables) {\n      return _twig2.default.twig({\n        data: this.getTemplate()\n      }).render(variables);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      this.shadowRoot.innerHTML = this.renderTemplate(this.getTemplateVariables());\n    }\n  }]);\n\n  return TwigBase;\n}(HTMLElement);\n\nexports.default = TwigBase;\n\n//# sourceURL=webpack:///./node_modules/twig-components/twig-base.js?");

/***/ }),

/***/ "twig":
/*!***********************!*\
  !*** external "Twig" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Twig;\n\n//# sourceURL=webpack:///external_%22Twig%22?");

/***/ })

/******/ });