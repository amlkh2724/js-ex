
function title() {
    const title = document.createElement("h1")
    title.textContent = "my website in the Dom:)"
    document.body.appendChild(title)
    title.style.textAlign = "center"
    title.style.backgroundColor = "gray"
    title.style.border = "1px solid black"
}
title()


const addbutton = document.createElement("button");
addbutton.innerHTML = "Click me!";
document.body.appendChild(addbutton);

let ul;
let li;
let words = ["This is sentence one.", "This is sentence two.", "This is sentence three.", "This is sentence four.", "This is sentence five.", "This is sentence six."];
let word = words[Math.floor(Math.random() * words.length)];
function changeword() {
    word = words[Math.floor(Math.random() * words.length)];
    li.innerHTML = word;
}




function createList() {
    let test = document.createElement('section');
    ul = document.createElement('ul');
    document.body.appendChild(test);
    test.appendChild(ul);
    li = document.createElement('li');
    ul.appendChild(li);

}
createList()


let isRunning = false;
let isClicked = false;
let intervalId;
function changebodycolor() {
    if (!isClicked) {
        document.body.style.backgroundColor = "green";
        isClicked = true;
    } else {
        document.body.style.backgroundColor = "gray";
        isClicked = false;
    }
}



addbutton.addEventListener("click", function () {
    if (!isRunning) {
        changebodycolor()
        intervalId = setInterval(changeword, 500);
        isRunning = true;
        addbutton.innerHTML = "Pause the interval!";
    } else {
        changebodycolor()
        clearInterval(intervalId);
        isRunning = false;
        addbutton.innerHTML = "Resume the interval!";
    }
});





