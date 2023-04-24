console.log("We are at tut7, let's discuss array and Objects");

// Array

const marks = [24, 3, 54, 7, 8, 52, 5];
const fruits = ['orange', 'banana', 'apple', 'grapes'];
const mixed = [1, 25, 'weasley', [3, 5]];
// we can construct array with the help of array constructor also
const arr = new Array(3, 25, 'Ellie');
console.log(arr);
console.log(marks);
console.log(fruits);
console.log(mixed);
console.log(arr.length);
console.log(fruits[1]);

console.log(Array.isArray(arr));
console.log(Array.isArray('adskh'));

arr[0] = 'Kishan';
console.log(arr);
let arrelement = arr[0];
console.log('element: ', arrelement);

console.log(marks);
let value = marks.indexOf(54);
console.log(value);

// Mutating or Modifying array
marks.push(10);
marks.unshift(12);
console.log(marks);
marks.pop();
marks.shift();
console.log(marks);

marks.splice(1, 3);     /* Removes the element within the range*/
console.log(marks);

marks.reverse();
console.log(marks);

let marks2 = [1, 2, 5, 35, 8];
// marks = marks.concat(marks2);  -> This will throw an error as marks mentioned above is const and not let, thus can't be changed
let marks1 = [34, 23, 24, 93];
marks1 = marks1.concat(marks2)
console.log(marks1);

// Objects

let myObj = {
    name: "Ellie",
    Skills: ['Knife', 'Archer', 'Guns'],
    Level: "Pro",
}
console.log(myObj)
console.log(myObj.Level)
console.log(myObj['Skills'])