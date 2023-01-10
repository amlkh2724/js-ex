const removeDup = (arr) => {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i], i + 1) === -1) {
            arr2.push(arr[i])

        }

    }
    return arr2
}
console.log(removeDup([3, 4, 4, 3, 6, 3]));


