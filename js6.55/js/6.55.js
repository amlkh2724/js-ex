let obj = { namee: "aml", age: 22 }
let arr = Array(100).fill(obj);


let arrays = Array.from({ length: 100 }, (_, i) => i + 1)
console.log(arrays);

let obj2 = { namee: "aml", age: 22 };
let values = Object.values(obj2);
console.log(values);
let obj3 = {}
for (let i = 0; i < values.length; i++) {
    obj3[values[i]] = values[i]
}
console.log(obj3);

let cobyArray1 = values.slice()


let cobyArray2 = values.slice(1, 2)
