import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `pl3-custom-element`
 * Custom Element Polymer 3
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Pl3CustomElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'pl3-custom-element',
      },
    };
  }
}

window.customElements.define('pl3-custom-element', Pl3CustomElement);
