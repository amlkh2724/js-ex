const numbers = [1, -5, 666, 2, 400, 11];


// 1. Sort the array of numbers from descending to ascending
// order.

const sortarray = numbers.sort((a, b) => a - b)
console.log(sortarray);



// 2. Sort the array of numbers from ascending to descending
// order.

const sortarrayrevers = numbers.sort((a, b) => b - a)
console.log(sortarray);