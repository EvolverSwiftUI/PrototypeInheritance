let myArray = ["a", 2, true];
myArray.push(5.6);
//console.log(myArray);
//console.log(myArray.length);
console.log(Array.prototype);

console.log(Object.getPrototypeOf(myArray));

let sports = ["Hockey", "Cricket", "Football"];
console.log(Object.getPrototypeOf(sports));

// Prototypal Inheritnce:
/*
1. Function <---- Person
2. Person <---- person1, person2...etc
this is called prototypal inheritance.

*/