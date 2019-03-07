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
