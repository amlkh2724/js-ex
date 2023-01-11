// const count = () => {

//     const array2 = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"]

//     let letters = array2.map(word => word.toLowerCase()).join('').split('');
//     let counters = letters.reduce((count, letter) => {
//         count[letter] = (count[letter] || 0) + 1
//         return count
//     }, {})
//     return counters

// }
// console.log(count());
//ex()
// JavaScript – count the letters
// The following exercise contains the following subjects:
// ● Array
// ● Objects
// Instructions
// Create a function that takes one argument, an array.
// Use this array:
// const array = ["Hello", "Good Day", "Your
// Welcome", "hotdog", "hamburgers"];
// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:

// 1, m: 2, t: 1, b: 1, s: 1 }
const countletters = (array) => {
    var maxCount = 0;
    var maxLetter = '';
     var result = {}
    for (let i = 0; i < array.length; i++) {
        let word = array[i]
        for (let j = 0; j < array.length; j++) {
            let letter = word[j];
            if (result[letter]) {
                result[letter]++
            } else {
                result[letter] = 1
            }

            // max letter
            if (result[letter] > maxCount) {
                maxCount = result[letter];
                maxLetter = letter;
            }

        }


    }
    console.log(maxLetter);
    return result;
}


const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
console.log(countletters(array))