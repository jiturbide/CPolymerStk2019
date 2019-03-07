(function(){
  console.log("Storing data: ----------------------");

  // var myObj = {name: "John", age: 31, city: "New York"};
  // var myJSON = JSON.stringify(myObj);
  // localStorage.setItem("testJSON", myJSON);

  // Retrieving data:
  text = localStorage.getItem("testJSON");
  var obj = JSON.parse(text);
  document.getElementById("demo").innerHTML = obj.name;
  console.log(obj);
}
)();
