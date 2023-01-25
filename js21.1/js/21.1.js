// The following exercise contains the following subjects:
// ● events
// Instructions
// Create a webpage that has an input field for the user’s age and
// a button. If the user enters a number above 18, make the text
// “you can drink appear”. If the user enters a number below 18,
// make the text “you’re too young” appear


function age() {
    const h1 = document.querySelector('h1')
    const getAge = document.querySelector(".typeage").value
    if (getAge > 18) {
        h1.innerHTML = "you can drink appear"
    } else {
        h1.innerHTML = "you’re too young"
    }
}
age()