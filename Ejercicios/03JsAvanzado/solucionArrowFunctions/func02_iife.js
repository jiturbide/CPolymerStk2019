(
  function(a,b) {

    var res = a+b;

    console.log("Inicio");
    console.log("IIFE: " + res);
    console.log("Fin");

   return res;
  }
)(30,20);
