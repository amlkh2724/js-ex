let click = true

const img = document.querySelector('.height')

function turnon() {
    if (click) {
        img.classList.add("light")
        click=false
    } else {
        img.classList.remove("light")
        click = true

    }

}
