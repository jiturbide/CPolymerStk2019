(function() {

  'use strict';

  //const API_URL = 'datos.json';
  //const API_URL = 'https://www.lyricsfreak.com/d/depeche+mode/enjoy+the+silence_20039358.html'
  //const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
  const API_URL = 'https://api-codigos-postales.herokuapp.com/v2/codigo_postal/09880 ';

  const control = document.querySelector('#article0');
  
  fetch(API_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });


})();
