(function() {

  'use strict';
  console.log("Inicio");
  console.log("Creacion promesa");
  var promise = new Promise((resolver, rechazar) => {
    console.log('Inicial');

    resolver();
})
.then(() => {
    throw new Error('Algo falló');

    console.log('Haz esto');
})
.catch(() => {
    console.log('Manejando el error!');
})
.then(() => {
    console.log('Haz esto sin que importe lo que sucedió antes');
});

let resolver = () => {
  console.log("Procesando resultados ...");
}

}
)();
