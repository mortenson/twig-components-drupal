import TwigBase from 'twig-components/twig-base';

class SayHello extends TwigBase {
  static get observedAttributes() {
    return ['name'];
  }

  renderTemplate(variables) {
    return require('./say-hello.twig')(variables);
  }
}

if (!window.customElements.get('say-hello')) {
  window.customElements.define('say-hello', SayHello);
}
