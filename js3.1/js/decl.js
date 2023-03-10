/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/
// From function declarations to function expressions
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
//     }
const welcome1 = () => {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
console.log(welcome1());

// function power(a) {
// let myNumber = a;
// let result = Math.pow(myNumber, 2);
// return result;
// }
const power = (a) => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
console.log(power(2));

// function add(a, b = 5) {
// let myNumber = a;
// let sum = myNumber + b;
// return sum;
// }
const add = (a, b = 5) => {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}
console.log(add(2, 5));
// From function expressions to function declarations
// const hello = () => "Hello!";
function hello() {
    console.log("Hello!");
}
hello()
// const squareRoot = a => Math.sqrt(a);
function squareRoot(a) {
    return Math.sqrt(a)
}
console.log(squareRoot(10));

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
function randomNumbers(a, b) {
    return Math.random() * (a - b) + b
}
console.log(randomNumbers(10, 5));