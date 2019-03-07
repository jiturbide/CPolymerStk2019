console.log("Script cargado");

'use strict';

let d01 = new Date( (1000 * 60 * 60 * 24 * 365 * 30) );
const d02 = new Date( (1000 * 60 * 60 * 24 * 365 * 30) );

console.log("Fecha de nacimiento de una persona de 30 años al dia de hoy");
console.log(d01);
console.log("d01.getYear(): " + d01.getFullYear());
d01.setYear(2018);
console.log("d01.getYear() + 18y: " + d01.getFullYear());


var x = "Gato Gatito Gatote";
console.log( x.replace(/to/g, 'ta') );

function validateEmail() {
  var emailElement = document.getElementById("email");
  var outputElement = document.getElementById("output");
  var emailString = emailElement.value;
  var regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
  if (regex.test(emailString)) {
    outputElement.innerHTML = "VALID EMAIL";
  } else {
    outputElement.innerHTML = "INVALID EMAIL";
  }
}

let array01 = [];
let array02 = [1,2,"Hola", null, undefined];

for (var i = 0; i < array02.length; i++) {
  console.log(array02[i]);
}
array01.push(2);
array01.push("Mundo");

for (let variable in array01) {
  console.log(array01[variable]);
}
for (let variable of array01) {
  console.log(variable);
}

var p = {
  id : 1,
  name : "Homero"
}
console.log(p);

function Person(id, n) {
  this.id = id || 2;
  this.name = n;
}
var p2 = new Person();
console.log(p2);

function Person2(id, n) {
  return {
    id : 0,
    name : n,
    finfo : function() {
      console.log(this.id + ", " + this.name);
    }
  };
}
var p3 = new Person2(1, "Homero");
p3.salary = 1000;
console.log(p3);
