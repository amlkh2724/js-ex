


// Your Task: Edit the storm object. Invoke the printSuperPower
// function using the storm object as the context of the function.
// So your output should be: my superpower is flying.
// Well, Storm also controls the weather, so, whatever you
// choose!
// You cannot change the printSuperPower function


// const myobj={}


const storm = {
    
// add code here 
    superPower: "flying",
    weather:" storm"
}
const myob=printSuperPower.bind(storm)
function printSuperPower() {
console.log("my superpower is " +
this.superPower+ " and the wether is:" + this.weather);
}
myob()



