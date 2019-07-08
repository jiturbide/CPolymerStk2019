console.log("Objetos");

var o1 = {};
console.log(o1);

var o2 = {
   nombre : "Jose Luis",
   correo : "j_iturbide@hotmail.com",
   print : function() { }
};

console.log(o2.correo);

function Persona() {
  this.nombre = "Homero";
  this.correo = "homero@springfield.com";
}

Persona.prototype.hobbie = "";
Persona.prototype.ditunombre = function() { console.log("Mi nombre es: " + this.nombre);}

var h = new Persona();
var b = new Persona();
b.nombre = "Bart";  b.correo="bart@sprinfield.com";
console.log(h.correo);
h.edad = 35;
console.log(h.edad);
console.log(b.edad);

console.log(h.hobbie);
console.log(b.hobbie);
console.log(b);
h.ditunombre();

console.log("homero hasOwnProperty edad: " + h.hasOwnProperty("edad"));
console.log("bart hasOwnProperty edad: " + b.hasOwnProperty("edad"));
console.log("homero hasOwnProperty hobbie: " + h.hasOwnProperty("homero"));
console.log("bart hasOwnProperty hobbie: " + b.hasOwnProperty("edad"));
