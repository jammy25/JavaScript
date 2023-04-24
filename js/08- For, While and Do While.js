console.log(`This is tutorial 9, let's discuss For, While & Do While Loops`)

for (let i = 0; i < 10; i++){
    console.log(i);
}

j = 0;
while(j < 10){
    console.log(j);
    j += 1;
}

// Do while loop
/* Suppose in the above case if j initially would have been 110 then the whie would have not printed anything at all, in do while we do the same process as while loop, only difference is before entering the loop we print a value once*/

let k = 110;
do{
    console.log(k + 1);
    k += 1;
}while (k < 10);

// Break function

let k1 = 0;
do{
    console.log(k1 + 1);
    if (k1 === 5){
        break;
    }
    k1 += 1;
}while(k1 < 10);
console.log('Done');

// Continue function

let k2 = 0;
do{
    if (k2 === 5){
        k2 += 1;
        continue;
    }
    console.log(k2);
    k2 += 1;
}while(k2 < 10);
/*We used continue here to skip an iteration*/

// To iterate in an array
let arr = ['array', 2, 3, 4, 5, 8];

/*first method*/
arr.forEach(function(element){
    console.log(element);
})

/*old method*/
for (let i = 0; i < arr.length; i++){
    const element = arr[i]
    console.log(element)
}

// To iterate in an object
let obj = {
    name: "Chandler Bing",
    age: 30,
    occupation: "Transponster",
    nick_name: "Ms. chanandler bong"
}
for (let key in obj){
    console.log(`The ${key} of the object is ${obj[key]}`)
}