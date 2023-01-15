
//  Create a function that receives 1 argument, an object, and
//  returns a new object with the properties and values
//  swapped.


const swapped = (swapMe) => {
    swap = {}
    for (let swapp in swapMe) {
        swap[swapMe[swapp]] = swapp
    }
    return swapp
}
