// From function declarations to explicit and implicit
// return functions (one of each)

// function welcome() {
// let welcome = 'Welcome to Appleseeds Bootcamp!';
// return welcome;
// }
function welcome() {
    return 'Welcome to Appleseeds Bootcamp!';
}
console.log(welcome());

// function power(a) {
// let myNumber = a;
// let result = Math.pow(myNumber, 2);
// return result;
// }
function power(a) {
    return a * 2
}
console.log(power(2));
// From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);

(function squareRoot(a) {
    return Math.sqrt(a)
})()

    // const randomNumbers = (a, b) => Math.random() * (a - b) +
    //     b;

    (function randomNumbers(a, b) {
        return Math.random() * (a - b) + b
    })()