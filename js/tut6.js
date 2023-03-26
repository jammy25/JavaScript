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
console.log(html.toLowerCase())
console.log(html.toUpperCase())
console.log(html)
console.log(html[1])
console.log(html.indexOf('<'))