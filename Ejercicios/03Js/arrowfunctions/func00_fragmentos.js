//Immediately invoked function expression
(function () {
 'use strict';
  //Esta forma permite agregar declaraciones extensas que estaran encapsuladas
  console.log('Inicio del programa');

  //Regrsar un objeto

  var getTempItem = function(id) {
   return {
     id: id,
     name: 'Temp'
   };
  };

  console.log("Funcion: " + getTempItem);
  let tmpObj = getTempItem();
  console.log("Objeto: " + tmpObj);
  console.log("Emento Objeto: " + tmpObj.name);

  var tmpStr = JSON.stringify(tmpObj);
  console.log("String: " + tmpStr);


  //
  // var getTempItem = id => ({id:id, name:'Temp'});
  //
  // //No son constructores
  // var MyType = () => {};
  // // No son constructores
  // var MyType = () => {};
  // var object = new MyType();
  //
  // // no son métodos
  // var obj = {
  //  i:10,
  //  b: () => console.log(this.i, this),
  //  c: function () {
  //    console.log(this.i, this);
  //  }
  // }
  //
  // obj.b();
  // obj.c();
  // //this en IIFE
  // function startGame() {
  //  this.lives=0;
  //  this.addLives= ()=> {
  //    Oneup = setTimeOut ( () => {
  //      console.log(++this.lives);
  //    }, 1000);
  //  }
  // }
  //
  // var mario = new startGame();
  // mario.addLives();

  console.log('Fin del programa');
})();
