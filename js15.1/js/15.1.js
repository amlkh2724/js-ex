// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
// function getSum(arr1, arr2) {
//     const sum = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         sum += arr1[i];
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         sum += arr2[i];
//     }
// }
// getSum([1, 2, 3][5, 66, 23]);


// arr1 undefined arr2 undefined i used the breakpoints to fix we need to add return and change const to let
function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
        // return sum
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum

}
console.log(getSum([1, 2, 3], [5, 66, 23]));