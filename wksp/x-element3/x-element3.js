import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `x-element3`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class XElement3 extends PolymerElement {
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
        value: 'x-element3',
      },
    };
  }
}

window.customElements.define('x-element3', XElement3);
