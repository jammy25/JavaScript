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