/* Callbacks */

window.addEventListener("load", onWindowLoad);

function onWindowLoad() {
  console.log("Cargando 1 ...");
}


window.addEventListener("load", function () {
  console.log("Cargando 2 ...");
});

/*
 Declaration: function name(){}
 Invocation: name();
 Reference var: var x = name;
 Variable declaration: var y : function(){};
*/
