/* This reference */

//this refers to the object who invokes the function
function fun() {
  console.log(this.toString());
}

var object = { value:12, fun: function() { console.log( this.value ); }}

object.fun();
