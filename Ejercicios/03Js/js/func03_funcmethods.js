/* Function methods */

function myFunction() {
  console.log(this.myProperty);
}

var myObj = {
  myProperty : 15
};

myFunction.call(myObj);

myFunction.apply(myObj);

/* Default value*/
function x(value) {
  var a = value || "defaultValue";
  console.log("a: " + a);
}

// false, undefined, null, "", NaN are replaced by the default value
x(); //?
x(null); //?
x("a"); //?
x(false); //?
