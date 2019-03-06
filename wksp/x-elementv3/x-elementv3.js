import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
/**
 * `x-elementv3`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class XElementv3 extends PolymerElement {
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
        value: 'x-elementv3',
      },
    };
  }
}

window.customElements.define('x-elementv3', XElementv3);
