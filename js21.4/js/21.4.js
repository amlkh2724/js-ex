
let click = true;
const img = document.querySelector('.lightbulb');
function turnon() {
    if (click) {
        img.src = "./assest/bulb-on.jpg";
        click=false
    } else {
        img.src = "./assest/bulb-off.jpg";
        click = true;
    }
}