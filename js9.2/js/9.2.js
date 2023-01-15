// const stringArr = () => {
//     let arr = ["boo", "doooo", "hoo", "ro"]
//     for (let i = 0; i < arr.length; i++) {
//         let arr22 = arr.slice()
//         console.log(arr22[i].length);
//     }
// }
// console.log(stringArr());


const stringArr = () => {
    let arr2 = ["boo", "doooo", "hoo", "ro"]
    for (let arr of arr2) {
        console.log(arr.length);
    }
}
stringArr()
// for of loop because its more easy to use and less to write alot of code