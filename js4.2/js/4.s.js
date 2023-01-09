function argument() {
    let userChoice = +prompt("Enter a number between 0-100")
    if (userChoice >= 0 && userChoice <= 64) {
        return "F"
    }
    if (userChoice >= 65 && userChoice <= 69) {
        return 'D'
    }
    if (userChoice >= 70 && userChoice <= 79) {
        return "C"
    }
    if (userChoice >= 80 && userChoice <= 89) {
        return "B"
    }
    if (userChoice >= 90 && userChoice <= 100) {
        return "A"
    }
    else {
        alert("Enter a number between 0-100");
    }

}

console.log(argument());