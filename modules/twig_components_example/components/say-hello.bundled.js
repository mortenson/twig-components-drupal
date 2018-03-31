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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = Twig;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _twigBase = __webpack_require__(2);

var _twigBase2 = _interopRequireDefault(_twigBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SayHello = function (_TwigBase) {
  _inherits(SayHello, _TwigBase);

  function SayHello() {
    _classCallCheck(this, SayHello);

    return _possibleConstructorReturn(this, (SayHello.__proto__ || Object.getPrototypeOf(SayHello)).apply(this, arguments));
  }

  _createClass(SayHello, [{
    key: 'renderTemplate',
    value: function renderTemplate(variables) {
      return __webpack_require__(3)(variables);
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['name'];
    }
  }]);

  return SayHello;
}(_twigBase2.default);

if (!window.customElements.get('say-hello')) {
  window.customElements.define('say-hello', SayHello);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _twig = __webpack_require__(0);

var _twig2 = _interopRequireDefault(_twig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TwigBase = function (_HTMLElement) {
  _inherits(TwigBase, _HTMLElement);

  _createClass(TwigBase, null, [{
    key: 'observedAttributes',
    get: function get() {
      return [];
    }
  }]);

  function TwigBase() {
    _classCallCheck(this, TwigBase);

    var _this = _possibleConstructorReturn(this, (TwigBase.__proto__ || Object.getPrototypeOf(TwigBase)).call(this));

    _this.attachShadow({ mode: 'open' });
    return _this;
  }

  _createClass(TwigBase, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (this.dataset.ssrContent) {
        this.innerHTML = JSON.parse(this.dataset.ssrContent);
      }
      this.render();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback() {
      this.render();
    }
  }, {
    key: 'getTemplate',
    value: function getTemplate() {
      return '';
    }
  }, {
    key: 'getTemplateVariables',
    value: function getTemplateVariables() {
      var _this2 = this;

      var attributes = {};
      this.constructor.observedAttributes.forEach(function (attribute) {
        if (_this2.hasAttribute(attribute)) {
          attributes[attribute.replace('-', '_')] = _this2.getAttribute(attribute);
        }
      });
      return attributes;
    }
  }, {
    key: 'renderTemplate',
    value: function renderTemplate(variables) {
      return _twig2.default.twig({
        data: this.getTemplate()
      }).render(variables);
    }
  }, {
    key: 'render',
    value: function render() {
      this.shadowRoot.innerHTML = this.renderTemplate(this.getTemplateVariables());
    }
  }]);

  return TwigBase;
}(HTMLElement);

exports.default = TwigBase;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(0).twig,
    template = twig({id:"7b582078e89e36e2b32c5bfd74bdf800d206a18095a1fbe963e7ed425ef002e99323499d5640d95fd9e42c7529676944dc7743eab2f20574b1ce8d3425856a1f", data:[{"type":"raw","value":"<style>\n  :host {\n    display: block;\n  }\n  p {\n    font-size: 16px;\n    font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  }\n</style>\n<p>Hello "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"name","match":["name"]},{"type":"Twig.expression.type.filter","value":"escape","match":["| escape","escape"]}]},{"type":"raw","value":"!</p>\n"}], allowInlineIncludes: true, rethrow: true});

module.exports = function(context) { return template.render(context); }

/***/ })
/******/ ]);