var timeoutId;
var intervalId;
var contador = 0;
var texto = document.getElementById("texto");
function startTimeout() {
  console.log("setting timeout");
  timeoutId = setTimeout(function() {
    console.log("TIMEOUT!");
  }, 3000);
  console.log("After Timeout");
  console.log("timeout set:" + timeoutId);
}
function cancelTimeout() {
  console.log("cancelTimeout()");
  clearTimeout(timeoutId);
}
function startInterval() {
  if (!intervalId) {
    console.log("setting interval");
    intervalId = setInterval(function() {
      var texto = document.getElementById("texto");
      texto.innerHTML = contador++;
      console.log("INTERVAL!");
    }, 1000);
    console.log("After Interval");
    console.log("interval set:" + intervalId);
  }
}
function cancelInterval() {
  console.log("cancelInterval()");
  clearInterval(intervalId);
  intervalId = undefined;
}
