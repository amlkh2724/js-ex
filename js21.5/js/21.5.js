// Create a webpage with one field and one button.
// The user can choose the number of smileys, and you have
// to make them appear on the screen. If the user enters an input
// that is not a number show him an error message.


const input = document.querySelector("input")

function addingsmile() {

    for (let i = 0; i < input.value; i++) {
        let createimg = document.createElement('img')
        createimg.src = "./assest/smile.png";
        createimg.width = 50

        document.body.appendChild(createimg);
    }
}


