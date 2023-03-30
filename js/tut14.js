console.log(`welcome to tutorial 14, let's discuss Element Selectors`);

/*
Element Selectors:
1. Single element selector
2. Multi element selector
*/

// Single element selector

// let element = document.getElementById('myFirst');
// // element = element.className;
// // element = element.childNodes;
// // element = element.parentNode;
// element.style.color = `red`;
// // element.innerText = 'Ellie love dinosaurs';
// element.innerHTML = `<b>Ellie love dinosaurs</b>`;
// console.log(element);
// console.log(element.innerHTML);

// Query Selector
let sel = document.querySelector(`#myFirst`);
console.log(sel);

/*
id is denoted by #
class starts with .
*/