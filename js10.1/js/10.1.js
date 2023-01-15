'use strict'

// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.

// const isString = (words, callback) => {
//     if (typeof words === 'string') {
//         return callback(words)
//     }

// }

// function callback(words) {
//    console.log(words);
// }

// isString("hihi", callback);

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
// const firstWordUpperCase = (sentence, callback) => {
//     return callback(sentence)
// }


// function callback(sentence) {

//     let array = sentence.toUpperCase().split(",")
//     return array.join("-")
// }
// console.log(firstWordUpperCase("okay,okas", callback));



// Call the ‘firstWordUpperCase’ function with a callback of
// your choice.

const firstWordUpperCase = (sentence, callback) => {
    return callback(sentence)
}

function myCallback(sentence) {
    return sentence.toUpperCase();
}

console.log(firstWordUpperCase("hello world", myCallback));
// Create your own function that will receive from one of its
// arguments a callback function

function myFunction(num1, num2, callback) {
    return callback(num1, num2);
}
