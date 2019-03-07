//Immediately invoked function expression
(function (a,b) {
  //Esta forma permite agregar declaraciones extensas que estaran encapsuladas
  let c=a+b;
  console.log('iife: ' + c);
  return c;
})(19, 8);
