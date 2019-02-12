'use strict';

let arr01 = [];
let arr02 = ["Java", "javascript"];
let arr03 = [1,2,3,4,5];

console.log(arr01);
console.log(arr02);
console.log(arr03);

arr01[0] = "Bart";
arr01[5] = "Maggie";
arr01.push("Lisa");
console.log(arr01);
console.log(arr01[1]);

let arr04 = new Array();
let arr05 = new Array(1,2,3,"Marge", null);
console.log(arr04);
console.log(arr05);

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
