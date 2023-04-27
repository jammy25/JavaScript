console.log('This is tut16');

let element = document.createElement('li');

// We can enter text by textNode or by innerHtml/innerText
let text = document.createTextNode('I am a textnode');
element.appendChild(text);

// Add class to the element
element.className = 'childul';
element.id = 'createdid';
element.setAttribute('title', 'mytitle');
// element.innerHTML = "<b>Hello this is created from JS<b>"

let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);

// Replace createid

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
// We can replace child also
let myul = document.getElementById("myul");
myul.replaceChild(tnode, document.getElementById('fui'))

// Remove
myul.removeChild(document.getElementById('lui'));

// we use getAttribute to know the class or id name
// let pr = elem2.getAttribute('class');
// console.log(pr);

// hasAttribute tell us wheter the element is present or not via boolean
let pr = elem2.hasAttribute('class');
// let pr = elem2.hasAttribute('href');
console.log(pr, elem2);

// we can remove element by removeAttribute
// elem2.removeAttribute('class');
// console.log(elem2);



// QuizQuestion
// let variOne = document.createElement("h1");
// variOne.innerHTML = "Go to code with harry";
// variOne.setAttribute("id", "myid");
// variOne.setAttribute("class", "myclass");

// let forBodyTag = document.querySelector("body");
// // console.log(forTag); //uncomment it and check have selected whole body tag
// forBodyTag.append(variOne); //append varione with bodytag

// let link = document.createElement("a");
// link.innerHTML = "<b>Go now</b>";
// link.setAttribute("href", "https://www.codewithharry.com");
// link.setAttribute("id", "link");
// link.setAttribute("class", "link");

// variOne.append(link);

// console.log(variOne)