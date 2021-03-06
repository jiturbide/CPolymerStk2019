const template = document.createElement('template');

template.innerHTML = `
    <style>
       button, p {
         display: inline-block;
       }
    </style>
    <button aria-label="decrement">-</button>
    <p>0</p>
    <button aria-label="increment">+</button>
`;

(function(customElements){
  class XCounter extends HTMLElement {
    constructor(){
      super();
      this._value = 0;
      this.root = this.attachShadow({mode: 'open'});
      this.root.appendChild(template.content.cloneNode(true));
      this.valueElement = this.root.querySelector('p');
      this.incrementButton = this.root.querySelectorAll('button')[1];
      this.decrementButton = this.root.querySelectorAll('button')[0];

      this.incrementButton.addEventListener('click', (e) => this.value++);
      this.decrementButton.addEventListener('click', (e) => this.value--);
    }

    set value(value) {
      this._value = value;
      this.valueElement.innerText = this.value;

      //trigger our custom event 'valueChange'
      this.dispatchEvent(new CustomEvent('valueChange', {detail: this._value}));
    }

    get value() {
      return this._value;
    }

    static get observedAttributes() {
      return ['value'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
      if(attrName == 'value'){
        this.value = parseInt(newValue, 10);
      }
    }

    connectedCallback() {
      console.log("connected");
    }
  }

  customElements.define('x-counter', XCounter);

})(window.customElements);
