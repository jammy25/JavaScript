// Type conversion and type coercion

// Type Conversion

console.log("Welcome to tut5");

let myVar = 34;
console.log(myVar, typeof(myVar));
myVar = String(34);
console.log(myVar, typeof(myVar));

let booleanVar = true;
console.log(booleanVar, typeof(booleanVar));
booleanVar = String(true);
console.log(booleanVar, typeof(booleanVar));

let date = new Date();
console.log(date, typeof(date));
date = String(new Date());
console.log(date, typeof(date));

let arr = [1, 2, 3, 4, 5];
console.log(arr, arr.length, typeof(arr));
arr = String([1, 2, 3, 4, 5]);
console.log(arr, arr.length, typeof(arr));

// Function to convert directly to string, numbers etc.

let i = 34;
console.log(i.toString());

let stri = Number("3434");
console.log(stri, typeof(stri));
stri = Number("343d4");
console.log(stri, typeof(stri));
stri = Number(true);
console.log(stri, typeof(stri));
stri = Number([1, 2, 3, 4, 5]);
console.log(stri, typeof(stri));


let num = "34.098";
console.log(num, typeof(num));
num = Number("34.098");
console.log(num, typeof(num));
num = parseInt("34.098");
console.log(num, typeof(num));
num = parseFloat("34.098");
console.log(num, typeof(num));
num = 34.098;
console.log(num.toFixed(5), typeof(num));    /* toFixed is used to specify number of digits after decimal in a number */

// Type Coercion

let mystr = "394";
let mynum = 64;
console.log(mystr + mynum);
/* When str and num are add, JS consider both to be a str and concatenate them together */
mystr = Number("394");
console.log(mystr + mynum);