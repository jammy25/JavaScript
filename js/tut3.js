console.log('tut3');
// variables in js
// var let const
var name = `Voldemort`;
var school;
// school = 'Hogwarts';
var marks = 10;
console.log(name, school, marks)

/*
RULES FOR CREATING JAVASCRIPT VARIABLES
1. Cannot start with numbers
2. Can start with letter, _ or $
3. Variables are case sensitive
*/

var city = 'Bangalore';
console.log(city);

// using const to define variable
const headmasterName = `Dumbeldore`;
// headmasterName = `Severus`; -> the variable can't be changed when we use const, but it's not true in case of var.
console.log(headmasterName)
// const fruit; -> is not allowed you have to assign the variables

// using let to define variable
// let variable work inside a block and those changes are not applicable outside

{
    let city = `Kolkata`
    // city = `London` -> This variable here changes the local var 'Kolkata' and not the global var. If we comment let city then this same line will change the global var 
    console.log(city)
}
console.log(city)

// Use of const in arr
const arr1 = [35, 45, 8, 9, 7]
arr1.push(56)
console.log(arr1)
// here you cannot put this -> [23, 34, 5]