import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';

import './x-notifier.js';

import {MyRGB} from './MyRGB.js';

'use strict';

class XHost extends PolymerElement {
  static get template() {
    return html`
        <style>
          :host {
            display: block;
            font-family: Roboto, Noto, sans-serif;
          }
        </style>
        <p>Color generado: ([[rgbValues.red]], [[rgbValues.green]], [[rgbValues.blue]])</p>
          <x-notifier id="xnred" rgb-option="Red"></x-notifier><br>
          <x-notifier id="xngreen" rgb-option="Green"></x-notifier><br>
          <x-notifier id="xnblue" rgb-option="Blue"></x-notifier><br>
          `;
  }
  static get is() { return 'x-host'; }
  static get properties() {
    return {
      rgbValues : {
        type: Object,
        value: new MyRGB(),
        notify: true,
        readOnly: false,
        observer: 'rgbValuesObserver'
      }
    };
  }

  ready() {
    super.ready();
  }

  rgbValuesObserver() {
    // console.log("Algo cambio");
  }
  greenValueListener(e) {
    // Apunte06 Hacer observable el cambio
    //this.rgbValues.green = e.detail.value;
    this.set('rgbValues.green', e.detail.value);
    this._updateBackgroundColor();
  }
  blueValueListener(e) {
    //this.rgbValues.blue = e.detail.value;
    this.set('rgbValues.blue', e.detail.value);
    this._updateBackgroundColor();
  }
  redValueListener(e) {
    //this.rgbValues.red = e.detail.value;
    this.set('rgbValues.red', e.detail.value);
    this._updateBackgroundColor();
  }

  connectedCallback() {
    super.connectedCallback();
    //Apunte05 Alta de Listeners en HOST
    this.$.xnred.addEventListener('color-number-changed', e => this.redValueListener(e));
    this.$.xngreen.addEventListener('color-number-changed', e => this.greenValueListener(e));
    this.$.xnblue.addEventListener('color-number-changed', e => this.blueValueListener(e));

    //Apunte07
    this.addEventListener('color-number-changed', e => console.log('color-number-changed'));
    this.addEventListener('rgb-changed-event', e => console.log(e.composedPath()));
  }

  disconnectedCallback(){
    super.disconnectedCallback();
    console.log("disconnectedCallback");
  }

  _updateBackgroundColor() {
    let r = this.rgbValues.red;
    let g = this.rgbValues.green;
    let b = this.rgbValues.blue;
    let rgb = `rgb( ${r}, ${g}, ${b})`;
    console.log('Desde x-host: ' + rgb);
    this.style.backgroundColor = rgb;
  }

}

window.customElements.define(XHost.is, XHost);
