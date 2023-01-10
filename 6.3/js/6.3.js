const stringArr = () => {
    let arr = ["boo", "doooo", "hoo", "ro"]
    for (let i = 0; i < arr.length; i++) {
        let arr22 = arr.slice()
        console.log(arr22[i].length);
    }
}
console.log(stringArr());