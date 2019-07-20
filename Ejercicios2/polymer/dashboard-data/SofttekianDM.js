class SofttekianDM {
  constructor(n, is, e, h = "dormir") {
    console.log("Creando a un Softtekian nuevo");
    this.nombre = n;
    this.is = is;
    this.email = e;
    this.hobbie = h;
  }

  printInfo() {
    console.log(`${this.is}: ${this.nombre}, ${this.email}, hobbie: ${this.hobbie}`);
  }
  toJsonString() {
    return JSON.stringfy(this);
  }
  //Convencion para nombrar metodos privados
  _noQuieresQueSeInvoqueDesdeOtroPuntoFueraDELaClase() {}
}
