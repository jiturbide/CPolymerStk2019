/* * /
Estados de una promesa
fulfilled (cumplida): la acción relacionada con la promesa se completa con éxito
rejected (rechazada): la acción relacionada con la promesa no se completa con éxito
pending (pendiente): aún no se completa ni se rechaza
settled (finalizada): se completa o se rechaza
/* */

(function() {

  'use strict';
  console.log("Inicio");
  console.log("Creacion promesa");

  var promise = new Promise((resolver, rechazar) => {
    console.log('Inicial');

    resolver();
  });

  let fprocesar01 = () => {
      //throw new Error('Algo falló');
      console.log('Haz esto');
  }

  let fmanejoError02 = () => {
      console.log('Menejando el error!');
  }

  let fprocesar03 = () => {
      console.log('Haz esto sin que importe lo que sucedió antes');
  }

  let resolver = () => {
    console.log("Procesando resultados ...");
  }

  promise
  .then(resolver, rechazar)
  .then(fprocesar01)
  .catch(fmanejoError02)
  .then(fprocesar03);
}
)();
