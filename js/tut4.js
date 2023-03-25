// Primitive data types

// String
let name = "Rumus Lupin";
console.log("My string is " + name);
console.log("Data type is " + (typeof name));

// Number
let marks = 65;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log('Data type is ' + (typeof isDriver));

// null
let nullVar = null;
console.log('Data type is ' + (typeof nullVar));

// undefined
let undef = undefined;
console.log('Data type is ' + (typeof undef));

// Reference Data Type

// Array
let myarr = [2, 3, 4, 35, false, "string"];
console.log('Data type is ' + (typeof myarr));

// Object Literals
let stMarks = {
    Harry: 34,
    Ron: 25,
    Hermione: 40,
}
console.log('Data type is ' + typeof(stMarks));

// Functions
function findName() {
    
};
console.log("Data type is " + typeof(findName));

// Date
let date = new Date()
console.log("Data type is " + typeof(date));