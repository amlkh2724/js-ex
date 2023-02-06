// The following exercise contains the following subjects:
// ● fetch
// Instructions
// Let's do a simple ajax call with fetch using this URL
// “https://api.jokes.one/jod”.
// Create a button that will fetch the joke of the day.
// Display to the screen the joke title and the joke itself.


const mainBtn = document.getElementById("btn");
const jokeTitleText = document.getElementById("btn-container");
mainBtn.addEventListener("click", getJoke);


async function getJoke() {
    try {
        const response = await fetch("https://api.jokes.one/jod");
        const data = await response.json()
        let title = data.contents.jokes[0].joke.title;
        let text = data.contents.jokes[0].joke.text;
        jokeTitleText.innerHTML = `<h2>${title}</h2><p>${text}</p>`;

    }
    catch (err) {
        console.log(err);
    }
}

