const people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
people.splice(people.indexOf("Greg"), 1);
console.log(people);

people.pop()
console.log(people);

people.unshift("Matt")
console.log(people);

people.push("Aml")
console.log(people);

for (let i = 0; i < people.indexOf("Mary"); i++) {
    console.log(people[i]);
}
let cobyArray = people.slice(2, 4)
console.log(cobyArray);

let index = people.indexOf("Mary");
console.log(index);

let index2 = people.indexOf("foo");
console.log(index2);

let cobyArray2 = people.slice()
console.log(cobyArray2);

cobyArray.splice(2, 1, 'Elizabeth', "Artie")
console.log(cobyArray);

let withBob = [...people, "Bob"];
console.log(withBob);