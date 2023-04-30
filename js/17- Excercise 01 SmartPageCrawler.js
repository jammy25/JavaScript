console.log('Excercise 01')

// You have to create a variable which is a string containing the text which is a link you are interested in.
// You have to fetch all the links from a given page which contians this text

// codewithharry.com
// python

// You have to work this out in console and paste the code here

// ---------------------- 

// Solution

/*  Open codewithharry website
    open console
    clear console
    write the below code */

let str = 'python';
let links = document.links;
let href;

Array.from(links).forEach(function(element){
    href = element.href;
    if (href.includes(str)){
        console.log(href);
    }
})