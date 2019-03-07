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
