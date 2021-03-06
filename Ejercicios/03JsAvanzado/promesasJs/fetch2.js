(function() {

  'use strict';

  //const API_URL = 'datos.json';
  //const API_URL = 'https://www.lyricsfreak.com/d/depeche+mode/enjoy+the+silence_20039358.html'
  //const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
  const API_URL = 'http://127.0.0.1:8887/Ejercicios/03JsAvanzado/promesasJs/datos.json';

  const control = document.querySelector('#contenido');
  //const control = document.getElementById('contenido');

   fetch(API_URL)
     .then(response => response.json())
     .then(jsondata => printResponse(jsondata))
     .catch(err => console.log('Fallo la peticion ' + err));


	const printResponse = (jsondata) => {
		 	let theHtml = '';
		 	let theRow = '';

      theHtml = "<table style='width:100%' padd><tr> <th>Concepto</th> <th>Valor</th> </tr>";

      for(let key in jsondata.data) {
          //console.log(response.datos[key]['name']);

          theRow = '<tr><td>' + jsondata.data[key]['id'] + '</td><td>' + jsondata.data[key]['name'] + '</td></tr>';
          theHtml = theHtml + theRow;
      }

      theHtml = theHtml + '</table>';

		 	control.innerHTML = theHtml;
	}


})();
