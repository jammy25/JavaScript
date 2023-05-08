console.log("Welcome to tut-20");

let today = new Date();
// console.log(today);
let otherDate = new Date('8-4-2003 04:54:08');
otherDate = new Date('June 13 1976');
otherDate = new Date('05/1/1966');
// moZilla date -> Google search to know more formats
console.log(otherDate);
let a;
a = otherDate.getDay();   // --> Will provide 0 since may 01 1966 was Sunday
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getTime();
a = otherDate.getMonth();
console.log(a);

otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1976);
otherDate.setHours(01);
otherDate.setMinutes(02);
otherDate.setSeconds(03);
console.log(otherDate);