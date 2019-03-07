console.log("Script cargado");

'use strict';

let d01 = new Date( (1000 * 60 * 60 * 24 * 365 * 30) );
const d02 = new Date( (1000 * 60 * 60 * 24 * 365 * 30) );

console.log("Fecha de nacimiento de una persona de 30 años al dia de hoy");
console.log(d01);
console.log("d01.getYear(): " + d01.getFullYear());
d01.setYear(2018);
console.log("d01.getYear() + 18y: " + d01.getFullYear());





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

var student = {
    id : 1,
    name : 'Bart',
    hobbies : {
      principal : "play",
      secondary : "studying"
    }
};
student.score = 'F';
console.log("student.id: " + student.id);
console.log("student.hobbies.principal: " + student.hobbies.principal);
console.log("student.score: " + student.score);

const student2 = {
    id : 1,
    name : 'Bart',
    hobbies : {
      principal : "play",
      secondary : "studying"
    }
};

//student2 = 2;  //Error, no se puede cambiar una referencia
Object.freeze(student2);
//student2.id = 2; //Lanza erro por el use strict
console.log("student2.id: " + student2.id);

function Student(id) {
  this.id = id;
  this.name = "Benito";
}

let s = new Student();
s.hobbie = "sleep";
console.log("s.name: " + s.name);
console.log("s.hobbie: " + s.hobbie);

Student.prototype.age = 10;
let cucho = new Student(777);
console.log("cucho.id:" + cucho.id);
console.log("cucho.age: " + cucho.age);
