// The following exercise contains the following subjects:
// ● API’s
// Instructions
// Github has an awesome API that we can do among other
// things, to get information on a particular user. To get a
// particular Github user information just type in your browser the
// following:
// https://api.github.com/users/{username}
// You will get back a JSON object.
// With this knowledge, we can make a fun little app.
// Here is a small demo of what we should do.
// Please style it better than this!
// Let's create a small app that will have an input field. When
// you type a user’s name in the input field you will fetch from
// the GitHub API that particular user's information and displays a
// card of the user's information.
// That card should have at least the following:
// 1. Avatar image
// 2. Name of user
// 3. Number of public repos
// When a user clicks on the card it will open a new page to
// that user Github profile page.
// Things to think about:
// What will happen if a user types an invalid user name?
// What happens if the URL is broken?
// What happens if a user types the same user name? We
// wouldn’t want to have duplicate cards of the same profile.
// User experience
// What will make a better user experience? Things come into
// mind:
// 1. When a user gets a profile we should empty our input.
// 2. We should focus on the input on page load and each time
// you get a new profile.
// 3. We should be able to hit enter to search not just click on
// the button.
// 4. Anything else?

const input = document.querySelector("#username");
const button = document.querySelector("#search-button");
const output = document.querySelector("#output");
let namedStored = []

button.addEventListener("click", async () => {
    try {
        const username = input.value;
        if (!username) {
            console.log("Please enter a valid username");
            return;
        }
        if (namedStored.includes(username)) {
            let getEl = document.querySelector(".alreadyexit")
            getEl.innerHTML = `username: ${username} already in your list search!!//type another username you want to know about it`
            return
        }

        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        const card = document.createElement("div");
        card.classList.add("card");

        const avatar = document.createElement("img");
        avatar.src = data.avatar_url;

        card.appendChild(avatar);
        output.appendChild(card);

        let getname = document.createElement("p");
        let name = data.name;
        getname.textContent = name;
        card.appendChild(getname);
        let getNumberRes = document.createElement("p")
        let numberRes = data.public_repos
        getNumberRes.innerHTML = numberRes
        card.appendChild(getNumberRes)
        namedStored.push(username)


    } catch (err) {
        console.log(err);
    }
});


