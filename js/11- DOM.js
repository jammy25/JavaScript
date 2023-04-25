console.log("Welcome to tut 12, let's discuss DOM & creating a website")

let a = document;
a = document.all;
// a = document.body;
// a = document.forms;
// a = document.forms[0];
// a = document.links;
a = document.links[0];
a = document.links[0].href;
console.log(a);


/* Here a is a collection and not an array, so forEach function won't work here instead if need it as an array then we convert the collection to array and then print */

// let b = document.all;
// // b.forEach(function(element)){}     --> this will be a wrong syntax as b is not an array
// Array.from(b).forEach(function(element){
//     console.log(element);
// })