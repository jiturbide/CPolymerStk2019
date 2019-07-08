function loadData() {
  document.getElementById("content").innerHTML = "LOADING";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "data/cpcdmx.json", true);
  xmlhttp.onreadystatechange = function() {
    console.log("xmlhttp.readyState: " + xmlhttp.readyState + ", xmlhttp.status: " + xmlhttp.status);
    var codigos = "";
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var cpdata = JSON.parse(xmlhttp.responseText);

      var txtrow = '';
      for (var i = 0; i < cpdata.length; i++) {
        //console.log(cpdata[i]);
        var text = cpdata[i].cp;
        text += " ";
        text += cpdata[i].asentamiento;
        text += "<br>"
        codigos += text;
      }
      document.getElementById("content").innerHTML = codigos;
    }
  };
  xmlhttp.send();
}
