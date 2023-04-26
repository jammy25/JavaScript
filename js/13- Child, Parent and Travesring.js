console.log('Welcome to tut 15');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// console.log(cont);

console.log(cont.childNodes);
// childNodes - will contain all the childs inside container including new_line(text) and comment. Use it when you need comment or things like that, if you want to avoid that than use children(will only contain elements)

console.log(cont.children);

let nodeName = cont.childNodes[3].nodeName;
let nodeType = cont.childNodes[3].nodeType;
console.log(nodeName);
console.log(nodeType);

// node type
/*  1. Elements
    2. Attribute
    3. Text Node
    8. Comment
    9. document
    10. docType  */

let container = document.querySelector('.container');
console.log(container.children[1].children[0].children);
// This is a way to Traverse through elements

// Here is a method to grab the first child of a class and first element of a class
console.log(container.firstChild);
console.log(container.firstElementChild);

// Similarly for last child and last element we have
console.log(container.lastChild);
console.log(container.lastElementChild);

// To count child elements
console.log(container.childElementCount);

// To get the parent of child
console.log(container.firstElementChild.parentNode);

// To get the sibling of first child and sibling which is an element
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling);