(function() {
  /* Valid Datatypes:
  a string
  a number
  an object (JSON object)
  an array
  a boolean
  null

  JSON syntax is derived from JavaScript object notation syntax:
  Data is in name/value pairs
  Data is separated by commas
  Curly braces hold objects
  Square brackets hold arrays
  A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:
  */

  console.log("Datatypes ---------------------- ");
  var s = { "name":"John" };
  console.log("string: " + s.name);

  var n = { "age":30 };
  console.log("number: " + n.age);

  var o = { "employee":{ "name":"John", "age":30, "city":"New York" }};
  console.log("object: " + o.employee.city);

  var oa = {
    "name":"John",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
  };
  console.log("Object with array: " + oa.cars[0]);

  console.log("Convert to Strings -------------");
  function Person(name, age){
    this.name=name;
    this.age=age;
  }
  Person.prototype.calculate=function(){}
  var person = new Person("john", 32);
  var personJson =JSON.stringify(person);
  console.log(personJson);
  //output: {"name":"john","age":32}

  console.log("Converting Strings to Objects -------------");
  var personJson = "{\"name\":\"john\",\"age\":32}";
  var person = JSON.parse(personJson);
  console.log(person); //outputs object:object
  person.toString = function(){return this.name+"-"+this.age;}
  console.log(person.toString()); //outputs: John-32


})();
