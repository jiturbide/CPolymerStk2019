
//var o = {id: 123, nombre : "Homero"};

// function Persona(id, nombre){ return {'id': id, 'nombre' : nombre}; };
// var o = new Persona(123, 'Homero');
//
// console.log(o);

// 'use strict'
// for(let i=0; i<10; i++) {
//   if(i!==5) continue;
//   console.log("Este numero es: " + i);
// }

var binario = "";
var numero = 113;
var division = numero;
var resto = 0;
while(division > 0) {
  resto = division % 2;
  division = Math.trunc(division / 2);
  binario = resto + "" + binario;
  console.log("# " + resto + " " + binario + " " + division);
}
console.log("Cad Binario: " + binario);
