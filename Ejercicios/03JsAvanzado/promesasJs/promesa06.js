(function() {

  'use strict';

  const API_URL = 'datos.json';

//  get('https://jsonplaceholder.typicode.com/todos/1').then(function(response) {
  get('http://127.0.0.1:8887/Ejercicios/03JsAvanzado/ajax/data/data.json').
  then(function(response) {
//  get('http://www.dzoom.org.es').then(function(response) {
  console.log("Exito!", response);
  }, function(error) {
    console.error("Fallo!", error);
  });

  function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = function() {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        }
        else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = function() {
        reject(Error("Network Error"));
      };

      // Make the request
      req.send();
    });
  }

}
)();
