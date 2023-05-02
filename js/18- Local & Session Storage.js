console.log('This is tut 18');
let impArray = ['adrak', 'pyaz', 'bhindi'];

// Add a key-value pair inside local storage 
localStorage.setItem('Name', 'Harry');
localStorage.setItem('Name2', 'Kishan');

// Clears the entire local storage
// localStorage.clear();

// Retrieve an intem from the local storage
let name = localStorage.getItem('Name');

// let names = localStorage.getItem('Name2adsh');
// If getItem does not exist we will get a null value

// In setItem only restriction is that it won't return array as an array rather return the values as a string.
// localStorage.setItem('Sabzi', 'impArray');
// So instead we will use JSON.stringify to store the array as an Array and JSON.parse to retrieve the value as an array.

localStorage.setItem('sabzi', JSON.stringify(impArray));
name = JSON.parse(localStorage.getItem('sabzi'));

// Clear a particular key-value pair
// localStorage.removeItem('Name');

console.log(name);

// sessionStorage
// sessionStorage is same as localStorage

sessionStorage.setItem('sessionName', 'sHarry');
sessionStorage.setItem('sessionName2', 'sKishan');
sessionStorage.setItem('sessionsabzi', JSON.stringify(impArray));

// localStorage is permanent whereas sessionStorage ends after the session ends