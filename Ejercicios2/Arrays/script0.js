console.log("Hola mundo");

var arr = [1,2,3,4];
console.log(arr);

var arrEmpty = [];
console.log("arr: " + arrEmpty + " , length: " + arrEmpty.length);

let arr02 = new Array(1,2,3, "Hola", null, undefined);
console.log(arr02);

console.log("--------------------------------------");
let matrix = [];
for (var i = 0; i < 10; i++) {
  let myArray = new Array();
  //push
  let str = '';
  for (var j = 0; j < 10; j++) {
    myArray[j] = (i+1)*(j+1);
    //myArray.push(i*j);
    str = str + ((i+1)*(j+1)) + ' ';
  }
  console.log(myArray);
  console.log(str);
}


//2 4 6 8 10 12 14 16 18
//
//9 18 27
