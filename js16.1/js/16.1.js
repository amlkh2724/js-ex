// // Without running the code below, explain in your own words
// // what the result of each block of code will be and why.
// // If there are any faulty outputs, please write on how we can fix
// // them.


// Block 1
// function funcA() {
//     console.log(a);
//     console.log(foo());
//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }
// console.log(funcA());;


// answer:undefined //




// Block 2
// var fullName = 'John Doe';
// var obj = {
//     fullName: 'Colin Ihrig',
//     prop: {
//         fullName: 'Aurelio De Rosa',
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName());
// Aurelio De Rosa///////////
// var test = obj.prop.getFullName;
// console.log(test());
// undefined//////////// if we add to getfullname() its well work



// Block 3
// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// funcB();//1
// console.log(typeof a);//undefined // take it first  if we do console.log in the func it well work
// console.log(typeof b);//number







// Block 4
// function funcC() {
//     console.log("1");
// }
// funcC();//1
// function funcC() {
//     console.log("2");
// }
// console.log(funcC());//undefined not have return





// Block 5
// function funcD1() {
//     d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
//     var e = 1;
// }
// console.log(funcD2());; // undefined
// console.log(e); //we need to console inside the function







// Block 6
// function funcE() {
//     console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);
// var f = 1;
// funcE(); //undefined  log before the func 