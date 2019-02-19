const template = document.createElement('template');

template.innerHTML = `
    <style>
       button, p {
         display: inline-block;
       }
    </style>
    <button aria-label="decrement">-</button>
    <p id="valueElement">0</p>
    <button aria-label="increment">+</button>
`;

(function(customElements){
  class XCounter extends HTMLElement {
    constructor(){
      super();
      console.log("constructor()");
      //Se da de alta el control root al shadow dom
      this.root = this.attachShadow({mode: 'open'});
      this.root.appendChild(template.content.cloneNode(true));
      //variables de instancia
      this._numerito = 0;
      this.valueElement = this.root.getElementById("valueElement");
      console.log("this.valueElement: " + this.valueElement);
      this.incrementButton = this.root.querySelectorAll('button')[1];
      this.decrementButton = this.root.querySelectorAll('button')[0];

      this.incrementButton.addEventListener('click', (e) => this.numero++);
      this.decrementButton.addEventListener('click', (e) => this.numero--);
    }

    set numero(value) {   // control.numero = 8
      console.log("set numero(value): " + value);

      this._numerito = value;
      this.valueElement.innerText = value;

      //inicializar(cuantos);

      //trigger our custom event 'valueChange'
      //this.dispatchEvent(new CustomEvent('aguasEvent', {chisme: this._value}));
    }
    // inicializar(cuantos) {
    //   this.guess = random(1, cuantos);
    //   intentos = 0;
    //
    //    pintarBotones(cuantos);
    //  }

    // console.log(control.numero);
    get numero() {
      console.log("get numero()");
      return this._numerito;
    }

    connectedCallback() {
      console.log("connected to Shadow DOM");
    }
  } //Fin clase
  console.log("Se termino de declarar la clase");

  customElements.define('x-counter', XCounter);

})(window.customElements);
