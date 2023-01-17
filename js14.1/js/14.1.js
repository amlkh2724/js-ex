// The following exercise contains the following subjects:
// ● reduce method
// Instructions
// Write the following functions using the reduce built-in function.
// 1. max
// 2. the sum of even numbers
// 3. average
const array = ['11', '22', '1', '99']
// max
const maxnumber = array.reduce((max, currentval) => {
    return currentval > max ? currentval : max
})
console.log(maxnumber);

const array2 = ['11', '22', '1', "12", '99']

// 2. the sum of even numbers

const sumeven = array2.slice().reduce((even, currentval) => {
    if (currentval % 2 === 0) {
        return even + +currentval;
    } else {
        return even;
    }
}, 0); //initial value should be set to zero
console.log(sumeven);

// 3. average

const average = array2.slice().reduce((sum2, currentval) => {
    return (sum2 + +currentval) / array2.length

}, 0)
console.log(average);