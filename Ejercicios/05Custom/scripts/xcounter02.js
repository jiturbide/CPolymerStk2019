(function(customElements){

  console.log("1. Se inicia el IIFE de XCounter");
  class XCounter extends HTMLElement {
    constructor(){
      super();
      console.log("3. Constructor");
    }
    connectedCallback() {
      console.log("4. Conectado al DOM");
      this.innerHTML = `
          <p>Hello World</p>
      `;
    }
  } //Fin class
  console.log("2. Se termino de declarar la clase");
  customElements.define('x-counter', XCounter);

})(window.customElements);
