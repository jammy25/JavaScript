console.log('Excercise')

// You have to create a variable which is a string containing the text which is a link you are interested in.
// You have to fetch all the links from a given page which contians this text

let c = document.links;

Array.from(c).forEach(function(element){
    if (element.href.includes('harry')){
        console.log(element.href);
    }
    else{
        console.log('text not included')
    }
});