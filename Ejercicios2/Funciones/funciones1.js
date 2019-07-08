
'use strict';

console.log("Inicio del javascript");

//Funcion con nombre
function sumar(a, b) {
  var r = a+b;
  return r;
}
let res = sumar(4,5);
console.log(res);
console.log(typeof res);
//console.log("r: " + r);

//Funcion anonima
let fsumar = function (a, b) {
  return a + b;
}
console.log(fsumar);  //Imprime la funcion
console.log(typeof fsumar); // "function"
console.log(fsumar(1,2)); // 3
console.log(typeof fsumar(1,2)); // "number"

//Arrow function
let fsumarArrowF = (a,b) => {
  return a + b;
}
console.log("fsumarArrowF(2,4): " + fsumarArrowF(2,4));
console.log(typeof fsumarArrowF);

// iife Immediately Invoked Function Execution
( function(a,b) {
  console.log("IIFE: " + (a+b));
  return a + b;
}(45,55));

let x = 55;

(/*Ejecutar inmediatamente*/
  function() {
    'use strict';
    let x = 77;
    /* Cuerpo */
    console.log("Hago nada " + x);
  }()
);
// __varModHipote_nombre
console.log("x: "+ x );

console.log("---------------------------------------");
//Arrow Function
//IIFE
function getRandom(max) {
  return Math.floor(Math.random() * max);
}
console.log("getRandom(100): " + getRandom(100));



console.log("SCOPE ---------------------------------------");

(function() {
  'use strict';
  if (true) {
    let xx = "Declared in a block of code";
  }
  //console.log("Value of x: " + xx);
})();
// var variables de funcion o global
// let variables de bloque {}

/* */
console.log("USO DE ARROW FUNCTIONS ---------------------------------");
var points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log( points);
points.reverse();
console.log(points);

points.sort(function(a, b){return a - b});
console.log(points);

points.sort( (a,b) => { return b - a} );
console.log(points);

function Alumno(nombre, nota) {
  return {
    nombre : nombre,
    nota: nota
  }
}
let arr = [];
arr.push(new Alumno('Wendy', 8.1));
arr.push(new Alumno('Alfredo', 8.0));
arr.push(new Alumno('Alejandra', 9.9));
arr.push(new Alumno('Carlos', 8.1));
arr.push(new Alumno('Diana', 9.99));
arr.push(new Alumno('Fernando', 10.0));
arr.push(new Alumno('Eliseo', 5.9));
arr.push(new Alumno('Erik', 7.9));
arr.push(new Alumno('Miguel Angel', 7.99));
console.log(arr);

//Nota descencendentemente
arr.sort(  (a, b) => {return b.nota - a.nota } );
console.log(arr);

// => Ordenar por nombre
// let criteria = (a,b) => {return a.nombre.localeCompare(b.nombre) } ;
// arr.sort( criteria );
// console.log(arr);



;

/* */
