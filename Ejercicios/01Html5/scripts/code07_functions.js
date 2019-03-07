//funcion normalita
function suma(a,b) {
  return a+b;
}
console.log(suma(2,3));

var f01 = function (a,b) {
  return a+b;
}
console.log(f01(3,4));

//IIFE
(function(a,b) {
  console.log("iife:" + (a+b));
})(5,6);

//Arrow Functions
var f03 = (a,b) => {
  return a+b;
}
console.log("arrow function: " + f03(10,20));

//IIFE con arrow function
((a,b) => {
  console.log("iife:" + (a+b));
})(7,8);

var p = {
  id : 1,
  name : "Bart"
}
//debugger;

with(p) {
  console.log(name);
}

var p = {
  _id: 1,
  name : "Coke",
  finfo : function() {
    console.log(this._id + ", " + this.name);
  },
  get id() { return this._id},
  set id(x) { this._id = x;}
}
p.id = 20;
p.finfo();

function Product() {
  return {
    _id: 1,
    name : "Coke",
    finfo : function() {
      console.log(this._id + ", " + this.name);
    },
    get id() { return this._id},
    set id(x) { this._id = x;}
  };
}
