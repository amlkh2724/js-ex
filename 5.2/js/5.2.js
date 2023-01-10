const lang = (language) => {
    switch (language) {
        case "mandarin":
            console.log("MOST number of native speakers!");
            break
        case "Spanish":
            console.log("2nd place in a number of native speakers'");
            break
        case "English":
            console.log("3rd place");
        case "Hindi":
            console.log("Number 4");
        case "Arabic":
            console.log("'5th most spoken language");
            break
        default:
            console.log("for all others simply log 'Not in the top 5");
    }

}
lang("Spanish")