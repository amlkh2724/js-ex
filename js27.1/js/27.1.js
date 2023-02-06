// Write a function that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch.


const isLessGreater = new Promise((resolve, reject) => {
    const getNumber = 1
    if (getNumber > 10) {
        resolve()
    } else {
        reject()
    }
})
isLessGreater.then(() => {
    console.log("its greater than 10");
})
isLessGreater.catch(() => {
    console.log("its less than 10");
})
