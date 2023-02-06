// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
// will sort the words in alphabetical order. If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch.

const array = ["asda", "dsad", "bfdsgvls"];


function makeAllCaps() {
    return new Promise((resolve, reject) => {
        const getCapt = array.map(index => (index.toUpperCase()))
        resolve(getCapt)
    })
}

function sortWords() {
    return new Promise((resolve, reject) => {
        array.forEach(arr => {
            if (typeof arr !== 'string') {
                reject(new TypeError('Array must only contain strings'))
            }
        })
        const sortedArray = array.sort();
        resolve(sortedArray);

    })
}
makeAllCaps().then(upperCaseArray => {
    console.log(upperCaseArray);
  });
  
  sortWords().then(sortedArray => {
    console.log(sortedArray);
  }).catch(error => {
    console.log(error);
  });
