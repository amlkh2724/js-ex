// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
//line 10 sum is undefined
// 2. Which debug method did you use to find the bug?
// debugger method
// 3. Explain the bug in your own words.
//the var sum has not have a initial value to start with so it well be undefined
// 4. Fix the code and submit it all.
function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
calcAverage([85, 90, 92]);

// function calcAverage (arr){
// var sum ;
// for ( var i = 0 ; i < arr .length; i ++ ){
// sum += arr [i];
// }
// return sum ;
// }
// calcAverage ([ 85 , 90 , 92 ]);
// console.log(calcAverage ([ 85 , 90 , 92 ]));