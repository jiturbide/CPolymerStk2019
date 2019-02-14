/* Function methods */

function myFunction() {
  console.log(this.myProperty);
}

var myObj = {
  myProperty : 15
};

//myObj.myFunction();

myFunction.call(myObj);
myFunction.apply(myObj);

/* Default value*/
function x(value) {
  var a = value || "Homero";
  console.log("a: " + a);
}

// false, undefined, null, "", NaN are replaced by the default value
x(); //? a: Homero
x(null); //? a: Homero
x("a"); //? a: a
x(false); //? a: Homero

//falsy values: 0, NaN, null, false
// undefined
