// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

function findSmallest(a, b, c) {
    if (a > b > c) {
        return c;
    } else if (a > c > b) {
        return a;
    } else {
        return b;
    }
}
findSmallest(52, 66, 2);
//line 18
//debbger
// we dont call the same function
// findSmalest is not defined
//to write the same function in name
