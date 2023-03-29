console.log(`This is tut10, let's discuss Function`);

function Book(name, thanksMsg = 'Thanks anyway.'){
    console.log(`Hello ${name}, my name is Tom Marvallo Riddle. ${thanksMsg}`);
    return `10 Points`;
}
let name = "Gennie Weasley";
let name1 = "Moaning Myrtle";

let val = Book(name, 'Thanks for opening the Chamber of Secrets!');
console.log(val);

// We can return the value also

function Book1(name, thanksMsg = 'Thanks anyway.'){
    let msg = `Hello ${name}, my name is Tom Marvallo Riddle. ${thanksMsg}`;
    return msg;
}
let name2 = "Gennie Weasley";
let name3 = "Moaning Myrtle";

let val1 = Book1(name3, 'Thanks for opening the Chamber of Secrets!');
console.log(val1);

// We can also do that by putting the function in a variable

const myBook = function (name, thanksMsg = 'Thanks anyway.'){
    console.log(`Hello ${name}, my name is Tom Marvallo Riddle. ${thanksMsg}`);
}
let name4 = "Harry Potter";

let val2 = myBook(name4);


const myObj = {
    name: `Neil Drucman`,
    game: function(){
        return "Last of Us"
    }
}
console.log(myObj.game())

// For loop revision
arr = ['fruits', 'vegetables', 'furniture']

arr.forEach(function(element, index, array){
    console.log(element, index)
});

// Scope

/*Case_1*/
var i = 234;
console.log(i);

function ui(name){
    var i = 9;
    console.log(i)
    return (`My name is ${name}`);
}
console.log(ui('Kishan'), i);

/*Case_2*/
var j = 234;
console.log(i);

function uj(name){
    j = 9;
    console.log(j)
    return (`My name is ${name}`);
}
console.log(uj('Kishan'), j);

/*Case_3*/
let k = 234;
console.log(k);

function uk(name){
    let k = 9;
    console.log(k)
    return (`My name is ${name}`);
}
console.log(uk('Kishan'), k);

/*Case_4(a)*/
{
    var a = 234;
    console.log(a)
}
console.log(a)

function ua(name){
    let a = 9;
    console.log(a);
    return (`My name is ${name}`)
}
console.log(ua('Kishan'), a)

/* see var has a global level scope so once we declared a with var it will throw value everywhere, whereas let & const has block level scope and we declare them inside a func/blocj we won't receive it outside the block */

/*Case_4(b)*/
// {
//     let b = 234;
//     console.log(b)
// }
// console.log(b)

// function ua(name){
//     let b = 9;
//     console.log(b);
//     return (`My name is ${name}`)
// }
// console.log(ua('Kishan'), b)    /*--> The code will throw an error*/