(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)})([function(a){a.exports=Twig},function(a,b,c){'use strict';function d(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function e(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function f(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c(2),i=function(a){return a&&a.__esModule?a:{default:a}}(h),j=function(a){function b(){return d(this,b),e(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return f(b,a),g(b,[{key:'renderTemplate',value:function(a){return c(3)(a)}}],[{key:'observedAttributes',get:function(){return['name']}}]),b}(i.default);window.customElements.get('say-hello')||window.customElements.define('say-hello',j)},function(a,b,c){'use strict';function d(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function e(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function f(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(b,'__esModule',{value:!0});var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c(0),i=function(a){return a&&a.__esModule?a:{default:a}}(h),j=function(a){function b(){d(this,b);var a=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return a.attachShadow({mode:'open'}),a}return f(b,a),g(b,null,[{key:'observedAttributes',get:function(){return[]}}]),g(b,[{key:'connectedCallback',value:function(){this.dataset.ssrContent&&(this.innerHTML=JSON.parse(this.dataset.ssrContent)),this.render()}},{key:'attributeChangedCallback',value:function(){this.render()}},{key:'getTemplate',value:function(){return''}},{key:'getTemplateVariables',value:function(){var a=this,b={};return this.constructor.observedAttributes.forEach(function(c){a.hasAttribute(c)&&(b[c.replace('-','_')]=a.getAttribute(c))}),b}},{key:'renderTemplate',value:function(a){return i.default.twig({data:this.getTemplate()}).render(a)}},{key:'render',value:function(){this.shadowRoot.innerHTML=this.renderTemplate(this.getTemplateVariables())}}]),b}(HTMLElement);b.default=j},function(a,b,c){var d=c(0).twig,e=d({id:'136be0b34b94ab9148acfa8f75586595a0f53d7c3abcb524585ab7b93f460920c448a7a18258dedd88566651639cb66d09e2e5dcce210a52811c4396d0f6c25f',data:[{type:'raw',value:'Hello '},{type:'output',stack:[{type:'Twig.expression.type.variable',value:'name',match:['name']},{type:'Twig.expression.type.filter',value:'escape',match:['| escape','escape']}]},{type:'raw',value:'!\n'}],allowInlineIncludes:!0,rethrow:!0});a.exports=function(a){return e.render(a)}}]);