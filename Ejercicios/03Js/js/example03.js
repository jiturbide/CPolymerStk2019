(function(){
  console.log("Storing data: ----------------------");
  
  myObj = {name: "John", age: 31, city: "New York"};
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);

  // Retrieving data:
  text = localStorage.getItem("testJSON");
  obj = JSON.parse(text);
  document.getElementById("demo").innerHTML = obj.name;
}
)();
