console.log("Inicia el programa");

//Ejecucion de funciones asociadas temporalmente a obj.
function myFunction() {
  console.log(this.myProperty);
}
myFunction();
var myObj = {
  myProperty : 15
};
//call
myFunction.call(myObj);
//call
myFunction.apply(myObj);

//Falsy Values y Valore Default
/* Default value*/
function x(value, other=33) {
  var a = value || "Homero";
  console.log("a: " + a + ", "  + other);
}

// false, undefined, null, "", NaN are replaced by the default value
x(); //? a: Homero
x(null); //? a: Homero
x(""); //? a: a
x(false); //? a: Homero
x("Moe");
x(44, false);

//Clojures








console.log("Termina el programa");
