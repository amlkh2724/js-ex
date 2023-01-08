console.log(date());

function date() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = new Date()
    var nameday = days[date.getDay()]
    var currentDay = date.getDate()
    var nameMonth = months[date.getMonth()]
    var year = date.getFullYear()

    return `Today is ${nameday} the ${currentDay} of ${nameMonth} ${year} `
}
