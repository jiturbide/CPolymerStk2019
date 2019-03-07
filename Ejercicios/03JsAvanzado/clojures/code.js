// Closure variable scope
function trickyAdd(number1, number2) {
  function doAdd() {
    return number1 + number2;
  }
  number1 += 1;  //number1 = 2
  number2 += 2; //number2 = 3
  return doAdd();
};
console.log(trickyAdd(1, 1));

// inner function (from lesson 03)
console.log("*inner function*");
function outer() {
  var x = "I am declared in the outer function";
  function inner() {
    console.log(x);
  }
  inner();
}

outer();

// this and that
console.log("*this and that*");
var myObj = {
  myVar: "Hello there!",
  greet: function() {
    eso = this;
    innerGreet = function() {
      console.log(eso.myVar);
    };
    innerGreet();
  }
};

myObj.greet();
