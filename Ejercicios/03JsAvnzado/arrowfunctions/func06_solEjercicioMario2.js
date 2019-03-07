'use strict';

(function(multiplo) {

  console.log('Inicio del programa');
  let arr = [];

  for (let i = 0; i < 10; i++) {
   arr.push(i*multiplo);
  }
  console.log(arr);
  arr.forEach(function(item) {
   console.log(item);
  });
  console.log('Fin del programa');

})(5);
