console.log("Inicio de la ejecucion");

//Declaracion de funcion
function sumar(a, b) {
  console.log("sumar(a, b)");
  return a + b;
}

var res = sumar(2,4);

//Funcion anonima
var fa = function (a, b) {
  console.log("function (a, b)");
  return a + b;
}

var res = fa(3,5);

//Funcion en linea, IIFE. Se declara e inmediatamente se ejecuta
( function (a, b) {
  console.log("IIFE function (a, b)");
  return a + b;
}
)(10,20);

// Arrow Function
var arrfun = (a,b) => {
  console.log("Arrow function");
  return a+b;
}
arrfun(20,30);

//IIFE Arrow Function
(
  (a,b) => {
    console.log("IIFE Arrow Function");
    return a+b;
  }
)(23,45);

/* ------------------------------------------------ */

console.log("******* function scope*");

(function() {
  'use strict';
  if (true) {
    var x = "Declared in a block of code";
  }
  console.log("Value of x: " + x);
})();


//var points = [40, 100, 1, 5, 25, 10];
points.sort();
points.reverse();
points.sort(function(a, b){return a - b});
