console.log(`welcome to tutorial 14, let's discuss Element Selectors`);

/*
Element Selectors:
1. Single element selector
2. Multi element selector
*/

// 1. Single element selector

let element = document.getElementById('myFirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Ellie love dinosaurs';
element.innerHTML = '<b>Ellie love dinosaurs</b>';
// console.log(element);
// console.log(element.innerHTML);

//  Query Selector
let sel = document.querySelector('#myFirst');
sel = document.querySelector('.child');
sel = document.querySelector('b');
sel = document.querySelector('h1');
sel = document.querySelector('div');
// queryselector div only catches the first div in the html  

sel.style.color = 'green'
// the above line code will only make the first div green
console.log(sel);

// 2. Multi element selector

let elems = document.getElementsByClassName('child');
// console.log(elems);
// // We can access all the child by their index number
// console.log(elems[1]);

elems = document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'));
// This will help us catch all the child class inside container

elems = document.getElementsByTagName('div');
// This will help in getting all the div tags and we change all their property at once
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'brown';       /*This is basically how we will enter all the div and apply color to them from js*/
});