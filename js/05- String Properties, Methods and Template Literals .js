console.log("We are at tut6");

// String

const name = "Alfred";
const greeting = "Good Morning";
console.log(greeting + ' ' + name);

let html;
html = "<h1>this is HeAding</h1>" +
        "<p>this is a para</p>";

html = html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[1]);

console.log(html.indexOf('this'));
console.log(html.indexOf('agsdfg'));
console.log(html.indexOf('<'));
// If there is some character with multiple occurence and we want its last occurence then
console.log(html.lastIndexOf('<'));

console.log(html.charAt(5));
// To check if a character ends with
console.log(html.endsWith('str2'));
console.log(html.endsWith('para'));

console.log(html.includes('is'));
console.log(html.includes(' '));
console.log(html.includes('adsf'));

console.log(html.substring(0, 3));

console.log(html.slice(-4));
console.log(html.slice(0, 4));

console.log(html.split(' '));

console.log(html.replace('this', 'it'));

// Template Literals
/* We use template literals to avoing + and "" in html, as we did above(10-11)*/
let fruit1 = 'Banana';
let fruit2 = 'Apple';

let myHtml = `Hello ${name}
              <h1> This is heading </h1>
              <p> You like ${fruit1} and ${fruit2}
              `;
document.body.innerHTML = myHtml;