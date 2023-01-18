// What is wrong with this code?
// counter
// 1. First, find the line that contains the problem. Write it down.
// line12
// 2. Which debug method did you use to find the bug?
// debugger
// 3. Explain the bug in your own words.
// we do just one time count + 1 so we need to do += to it work for everytime
// 4. Fix the code and submit it all.


function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter += 1;
        }
    } return counter;
}
console.log(countOccurrences("ini mini miny moe", 'n'));
// countOccurrences("ini mini miny moe", 'n');