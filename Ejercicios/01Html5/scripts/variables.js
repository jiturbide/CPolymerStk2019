//Este es un cometnario
/*
  Este es otro comentario bloque
*/
'use strict';

var x = 5; //GLOBAL
var y = 7;
let z = x + y;
console.log("z: " + z);
// alert("z: " + z);

const w = 3.1416;
console.log("w: " + w);
// w = 3.14159;

function sumar(a, b) {

  var resultado = 0; //LOCAL A LA FUNCION
  resultado = a + b;
  return resultado;
}

z = sumar(x, y);
console.log("z: " + z);
//console.log("resultado: " + resultado);

console.log("-----------------------------------");

function declareVariable() {
    if(true) {
      //scope function
      var a = 7;
    }
    console.log("declareVariable() " + a);  //? 7      ? Error
}
declareVariable();
//console.log("a es " + a); //? ERROR       //? ERROR

console.log("-----------------------------------");

//boolean, numerico, cadenas, arreglo, objeto, funciones.
var b = false;
var arr = [];
var arr01 = ["lunes", "martes"];

console.log("b: " + b);
console.log("arr: " + arr);
console.log("arr01: " + arr01);
console.log("arr01[0]: " + arr01[0]);

//Objeto al vuelo
var p = {nombre : 'JLuis', is: 'JLIL', hobbies: ['foto', 'fut']};
var j = {nombre : 'Janito', is: 'JLIL', hobbies: ['foto', 'fut']};

console.log("p: "  + p.nombre + ", " + p.is + ", hobbie: " + p.hobbies[0]);
p.ingreso = 2012;
console.log("ingreso: " + p.ingreso);

function Persona(nombre, is, ingreso) {
  this.nombre = nombre;
  this.is = is;
  this.ingreso = ingreso;
}

var pedrito = new Persona('Pedrito', 'P123', 2015);
var juanito = new Persona('Juanito', 'J123', 2018);

console.log("pedrito: " + pedrito.nombre);
console.log("juanito: " + juanito.nombre);
