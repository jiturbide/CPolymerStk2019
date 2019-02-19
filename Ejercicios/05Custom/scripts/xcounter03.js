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
      this.root = this.attachShadow({mode: 'open'});
      this.root.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
      console.log("connected");
    }
  }

  customElements.define('x-counter', XCounter);

})(window.customElements);
