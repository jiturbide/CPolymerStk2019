function startWorker() {
  var worker = new Worker("worker.js");
  worker.onmessage = function(event) {
    console.log("Message from worker: " + event.data);
  }
  console.log("Starting worker...");
  //worker.postMessage("starworker() postMessage(): ");
  for (let i = 0; i < 10; i++) {
    console.log("Script externo, startWorker(): " + i);
  }
}
