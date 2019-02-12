'use strict';

(function(multiplo) {

  console.log('Inicio del programa');
  let arr = [];

  for (let i = 0; i < 10; i++) {
   arr.push( (x) => {console.log(i);} );
  }
  console.log(arr);
  arr.forEach( function(item) {
   item();
  } );
  // for (let i = 0; i < 10; i++) {
  //  let funtmp = arr[i];
  //  funtmp();
  // }

  console.log('Fin del programa');

})(2);
