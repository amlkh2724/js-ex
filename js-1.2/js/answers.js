/*--Delete the wrong answers--
1. Which of the following is/are strings?
c) '4'

2. Which of the following is/are numbers?
a) 4
d) -4


3. Which of the following is/are booleans?
a) true
b) false


4. What is the result of 80 + 71.2?
a) 151.2

5. What is the result of "80" + 71.2?

c) "8071.2"


6. Does 100 + 30 produce a number or a string?
a) number


7. Does "100" + 30 produce a number or a string?
b)string

*/
//------Submit your answers under the
// question------//
//create three different ways to declare variables
var myFirst
const myFirst1 = 20
let myFirst2

//declare a variable and reassign a value to it
var x = 20
//create a variable and after that assign a string
var myString = "He's got it!"
// with its value being: He's got it!
// 1. create a variable and assign a value on how
// much a restaurant bill is.
var restaurantbill = 50
// 2. create a variable and assign a value on how
// much tax they should pay.

var restaurantbill1 = 60


// 3. create a variable that will calculate the bill
// * tax and its output would be: Your total bill is
// <total bill> $.
var hold = `Your total bill is ${restaurantbill + restaurantbill1}`
console.log(hold);

// Round the number 50.6 to its nearest integer
var number = 50.6
console.log(Math.round(number));
//Create a variable that is undefined
var hello