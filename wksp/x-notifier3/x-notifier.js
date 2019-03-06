import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';

'use strict';

class XNotifier extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
        font-family: Roboto, Noto, sans-serif;
      }
      paper-button {
        color: gray;
        width: 30%;
        backgroundColor: gray;
        flex-grow: 1;
        raised : true;
      }

    </style>
    <label for="pbRGB">Component [[rgbOption]] Value: [[colorNumber]]<label/>
    <paper-button id="pbRGB" on-click="onclickChangeBColor">[[rgbOption]]</paper-button>

    `;
  }
  static get is() { return 'x-notifier'; }
  static get properties() {
    return {
      colorNumber: {
        type: Number,
        value: 0,
        notify: true,    //Apunte03 notificacion?: color-number-changed
        readOnly: false, //Apunte01 Constante
        observer : '_colorNumberObserver'
      },
      rgbOption : {
        type: String,
        value: 'White',
        notify: false,  //Propagar notificacion = false
        readOnly: false,
        reflectToAttribute: true //Configurar desde un atributo del tag
      }
    };
  }
  onclickChangeBColor() {
    this.colorNumber = this._generateRandomRgbNumber();
    //Apunte02 La llamada a actualizacion ya no es necesaria
    //this._updateButtonColor();
  }

  _colorNumberObserver() {
    this._updateButtonColor();
  }

  _generateRandomRgbNumber() {
    return Math.floor(Math.random()*255);
  }

  _updateButtonColor() {
    let r = (this.rgbOption=="Red")? this.colorNumber : 0;
    let g = (this.rgbOption=="Green")? this.colorNumber : 0;
    let b = (this.rgbOption=="Blue")? this.colorNumber : 0;
    let rgb = `rgb( ${r}, ${g}, ${b})`;
    console.log("Desde x-notifier: " + rgb);
    this.$.pbRGB.style.backgroundColor = rgb;

    // Apunte07 Dispatch de un Custom Event
    var objevent = 	{
        detail: {
          rgbOption: this.rgbOption,
          colorNumber : this.colorNumber
        },
        bubbles: true,
        composed : true
      }

    this.dispatchEvent(new CustomEvent('rgb-changed-event', objevent));
  }

  connectedCallback() {
    super.connectedCallback();
    //this.addEventListener('color-number-changed', e => console.log(e));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    //this.removeEventListener('color-number-changed');
  }

}

window.customElements.define(XNotifier.is, XNotifier);
