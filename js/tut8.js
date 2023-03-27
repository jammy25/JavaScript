console.log("This is tutorial 8, let's discuss if/else");

const age = 65;

if (age == 19){
    console.log("Age is 19")
}

else if (age == 65){
    console.log("Age is 65")
}

else{
    console.log("Age is not 19")
}


const age2 = '35';

if (age2 === 35){             /*Here this won't satisfy as 3 = means along with value type should also satisfy*/
    console.log('Age2 is 35')
}
else if (age2 == 35){
    console.log('Age2 is a string 35')
}
else{
    console.log("Age2 is not 35")
}

let age3 = 65;
if (age3 != 19){
    console.log('Age3 is not 19')
}
else if (age3 == 65){
    console.log('Age3 is 65')
}
else{
    console.log('Age3 not known')
}

let age4 = '65';
if (age4 != 19){
    console.log('Age4 is not 19')
}
if (age4 !== 65){
    console.log('Age4 is not 65')
}
else{
    console.log('Age4 not known')
}

// const vari = 34;

if (typeof vari !== 'undefined'){
    console.log('Vari is defined')
}
else{
    console.log('Vari is not defined')
}

const doesDrive = true;
const age5 = 17;
if (doesDrive && age5 > 18){
    console.log('You can drive')
}
if (doesdrive = true || age5 > 18){
    console.log('You know how to drive but wait till you are 18')
}
else{
    console.log('You cannot drive')
}

// Ternary Operator
const age6 = 44;
console.log(age6 == 45? 'Age is 45': 'Age is not 45');