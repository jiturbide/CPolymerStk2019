/* Callbacks
http://www.cs.sjsu.edu/faculty/pearce/modules/lectures/web/javascript/dom.htm
*/

window.addEventListener("load", onWindowLoad);

function onWindowLoad(e) {
  console.log("Cargando 1 ...");
  console.log(e);
}


window.addEventListener("load", function () {
  console.log("Cargando 2 ...");
  console.log(this);
});

window.addEventListener("load", () => {
  console.log("Cargando 3 ...");
  console.log(this);
});

function fbody_onload01() {
  console.log("On Load 01 ");
  console.log(this);
}
function fbody_onload02() {
  console.log("On Load 02 ");
  console.log(this);
}
var x =0;
