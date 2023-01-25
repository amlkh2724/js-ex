// The following exercise contains the following subjects:
// ● DOM
// Instructions
// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px.

let fontsize = 50
let text = document.getElementById('text')
function increment() {
    if (fontsize < 100) {
        fontsize += 10
        text.style.fontSize = fontsize + 'px'
    }
}
function decrement() {
    if (fontsize > 6) {
        fontsize -= 10
        text.style.fontSize = fontsize + "px";
    }
}
