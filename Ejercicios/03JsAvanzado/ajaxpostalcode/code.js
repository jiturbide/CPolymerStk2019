function loadData() {
  document.getElementById("content").innerHTML = "LOADING";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "data/cpcdmx.json", true);
  xmlhttp.onreadystatechange = function() {
    console.log("xmlhttp.readyState: " + xmlhttp.readyState + ", xmlhttp.status: " + xmlhttp.status);
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var cpdata = JSON.parse(xmlhttp.responseText);

      var txtrow = '';
      for (var i = 0; i < cpdata.length; i++) {
        txtrow = cpdata[i].idestado
        // var text = "Nombre:";
        // text += personData.name;
        // text += "<br>";
        // text += "Age:";
        // text += personData.age;
        // text += "<br>";
        // text += "Hobbies:";
        // text += personData.hobbies.join(", ");
      }
      document.getElementById("content").innerHTML = personData;
    }
  };
  xmlhttp.send();
}
