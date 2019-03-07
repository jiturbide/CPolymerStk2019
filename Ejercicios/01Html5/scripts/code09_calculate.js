console.log("Script cargado");

'use strict';

let btn = document.getElementById("ageButton");

let fcalc = function () {
  let txt = document.getElementById('ageInput');
  let div = document.getElementById('ageOutput');

  let age = parseInt(txt.value);
  //..
  div.innerHTML = (100-age);
}

btn.addEventListener("click", fcalc , false);

var numberFormat = new Intl.NumberFormat("es-ES",
    {style : "currency",
     currency : "EUR",
     maximumFractionDigits : 2
    });

console.log(numberFormat.format(1000));
console.log(numberFormat.format(2000.354));

let encoded = encodeURI("http://oracle.com/app?v= Hola Mundo");
console.log(encoded);
let decoded = decodeURI(encoded);
console.log(decoded);

var s1 = new String('\t \u4E2D  \' \\ \" ');
console.log(s1);
