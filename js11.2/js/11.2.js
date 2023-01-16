// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
const array = [1, 2, 3, 4, 5]

const double = array.map(function (num) {
    return num * 2
})
console.log(double);

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
const evenorodd = [1, 2, 3, 4, 5, 6, 7, 8]

const onlyEvenValues2 = evenorodd.map(function (num) {
    return num % 2 === 0 ? num : ""

})
console.log(onlyEvenValues2);


// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.
let arr2 = ['str', 'okay', 12, 'no']
function showFirstAndLast(arr) {
    let newarr = []
    arr.forEach((string, idx) => {
        if (idx === 0 || idx === arr.length - 1) {
            if (typeof string === "string") {
                newarr.push(string)
            }
        }
    })
    return newarr
}

let result = showFirstAndLast(arr2);
console.log(result)

// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object

function vowelCount(string) {
    let obj = { a: 0, o: 0, u: 0 }
    string.split("").forEach((letter) => {
        if (obj[letter]) {
            obj[letter]++
        }

    })
    return obj
}
console.log(vowelCount("Hallo World"));


// Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

function capital(str) {
    str.forEach((str) => {
        return str.toUpperCase()
    })

}

// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.



// Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

function swapCase(str) {
    var words = str.split(" ");
    var swapped = "";
    words.forEach(function (word, index) {
        if (index % 2 === 0) {
            swapped += word.toLowerCase() + " ";
        } else {
            swapped += word.toUpperCase() + " ";
        }
    });
    return swapped.trim();
}
console.log(swapCase("okay hello"));
