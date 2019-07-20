// var o1 = { "employee":{ "name":"John", "age":30, "city":"New York" }};
// var o2 = { employee:{ name:"John", age:30, city:"New York" }};
// var o3 = "{\"employee\":{ \"name\":\"John\", \"age\":30, \"city\":\"New York\" }}";
// console.log(typeof o1);
// console.log(typeof o2);
// console.log(typeof o3);
//
// (function() {
// console.log("Inicio");
// var promise = new Promise((resolver, rechazar) => {
// console.log('Dentro de Promesa');
// resolver();
// });
// promise.then(() => {
// throw new Error('Algo falló');
// console.log('Despues del Error');
// }).catch(() => {
// console.log('Manejando el error!');
// }).then(() => {
// console.log('Haz esto sin que importe lo que sucedió antes');
// });
// let resolver = () => {
// console.log("Procesando resultados ...");
// }
// })();

function Person(name, age) { this.age = age; } //Funcion constructor de Person
var persons = [];
persons.push(new Person("Ed", 31));
persons.push(new Person("John", 22));
persons.push(new Person("Peter", 44));
persons.push(new Person("Joseph", 12));
persons.push(new Person("Richard", 18));
persons.sort( (pa, pb) => { return pa.age > pb.age ? -1 : 1; });
var res = persons.filter( p => { return p.age > 18;});
console.log(res);
