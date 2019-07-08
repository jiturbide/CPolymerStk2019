( () => {

  'use strict';

  console.log("Inicio de la ejecucion");

  var obj = { sabor : "fresa", color : 'rojo'};
  console.log("obj: " + obj);
  console.log("obj.sabor: " + obj.sabor);
  console.log("obj.color: " + obj['color']);
  obj.tamano = "venti";
  console.log("obj.tamaño: " + obj['tamano']);

  console.log("------------------------------");

  var obj0 = {};
  var obj1 = new Object();
  var obj2 = Object.create(obj1); //
  var obj3 = Object.create(obj);

  console.log("obj: " + obj0 + " " + obj1 );
  console.log("obj: " + obj0 + " " + obj1 + " " + obj2);
  console.log("obj3: ");

  console.log(obj3.sabor);
  obj3.textura = "Terciopelo";
  console.log("obj3.hasOwnProperty('textura'): " + obj3.hasOwnProperty('textura'));
  console.log("obj3.hasOwnProperty('color'): " + obj3.hasOwnProperty('color'));
  console.log(obj3);

  console.log("------------------------------");

  function Persona(nombre, edad, hobbie = "Nini") {
    this.nombre = nombre;
    this.edad = edad || 18;
    this.hobbie = hobbie;
  }

  var p01 = new Persona();
  var p02 = new Persona('Bart', 9);
  var p03 = new Persona('Homero', 40, "Operador");

  Persona.prototype.promedio = 5;

  //p01.promedio = 7.0;
  //delete p01.edad;
  //delete Persona.prototype.promedio;

  console.log(p01);
  console.log(p02);
  console.log(p03);

  console.log("******---------------------------");
/* */
  //Congela la estructura y valores de la instancia
  //Object.freeze(p03);
  p03.promedio = 2;

  Persona.prototype.showinfo = function() {
    console.log("Nombre: " + this.nombre);
  }
  p03.showinfo();
/* */ 
  console.log("---------------------------------------------");

  function Empleado(nombre, edad = 18) {
    return {
      nombre : nombre,
      edad : edad,
      showinfo : function() {
        console.log("nombre: " + this.nombre + ", edad: " + this.edad);
      }
    }
  }
  var e01 = new Empleado("Moe", 50);
  console.log("Empleado: " + e01);
  e01.showinfo();

}
)();
