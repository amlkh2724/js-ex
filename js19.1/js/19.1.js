// Please make the following changes to the HTML file while
// navigating the DOM.
// Create a variable that holds the <li> element with the class
// “start-here”. Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another subtitle with the text “subtitle 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of
// your

const startHere = document.querySelector('.start-here');
startHere.textContent = "main title"

const subtitle = document.createElement('li');
subtitle.textContent = "subtitle 4";
startHere.appendChild(subtitle);

startHere.lastElementChild.remove();


const title = document.querySelector('.title');
title.innerHTML = "Master Of The Dom";

const p = document.querySelector("p")
p.innerHTML = "hi"
