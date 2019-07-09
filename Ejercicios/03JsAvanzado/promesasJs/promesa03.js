(function() {

  'use strict';
  console.log("Inicio");
  console.log("Creacion promesa");
  var promise = new Promise((resolver, rechazar) => {
    console.log('Inicial');

    resolver();
  });

  let fprocesar01 = () => {
      throw new Error('Algo falló');
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
  .then(resolver)
  .then(fprocesar01)
  .catch(fmanejoError02)
  .then(fprocesar03);
}
)();
