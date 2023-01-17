// a. Array of words
const foods = ["falafel", "sabich", "hummus",
    "pizza with extra pineapple"];

// a.1. Sort the array of strings from descending to ascending
// order.

const sortarrayofstringdesc = foods.sort().reverse()
console.log(sortarrayofstringdesc);

// a.2. Sort the array of strings from ascending to descending
// order.

const sortarrayofstringdescs = foods.sort()
console.log(sortarrayofstringdescs);

// b. Let's sort an array of words that includes a word with an
// uppercase:
const wordupper = ["banana", "Food", "good", "Okay"];
let lowerCaseWords = wordupper.map(word => word.toLowerCase());
lowerCaseWords.sort();
let sortuppercase = lowerCaseWords.map((word, index) => {
    if (word === wordupper[index].toLowerCase()) {
        return word;
    } else {
        return wordupper[index];
    }
});
console.log(sortuppercase);


// b.1. Sort the array of strings from descending to ascending
// order.

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

const reverse = foodsWithUpperCase.sort().reverse()
console.log(reverse);


// b.2. Sort the array of strings from ascending to descending
// order.


const asctodesc = foodsWithUpperCase.sort()
console.log(asctodesc);



const words = ["apple",
    "supercalifragilisticexpialidocious",
    "hi", "zoo"];


// longest word
const longest = words.reduce((longestword, currentword) => {
    return longestword.length < currentword.length ? currentword : longestword
})
console.log(longest);



// c.1. Sort the array of strings from the longest word to the
// shortest word only using the sort function
const longesttoshort = words.slice().sort((a, b) => b.length - a.length)
console.log(longesttoshort);
