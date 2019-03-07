/* Javascript Functions as values */
var sum = function(a,b) { return a+b; }

//Esto es una declaracion
function invoke (fn) {
  return fn(2,3);
}

var res = invoke(sum);
console.log("res: " + res);

fun(); //OK
varfun(); //ERROR
var varfun = function(){ console.log("OK"); };
function fun(){ console.log("OK"); }
fun (); //OK
varfun();
/**/
