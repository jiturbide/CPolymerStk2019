/*
   Este es un comentario de bloque
*/
'use strict';
//Comentario de linea
console.log("ejemplo01.js");
//scope global
var a = 2;
var b = 4;
var c ;

console.log(a);
console.log(b);
console.log(c);

function declareVariable() {
    if(true) {
      //scope function
      var a = 7;
    }
    console.log("declareVariable() " + a);
}
declareVariable();
console.log("a es " + a);
{
let d = 45;
console.log("d: " + d);
}
//console.log("d: " + d);

const e = 3.1416;
e = 1.2;
