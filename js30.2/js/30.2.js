// The following exercise contains the following subjects:
// ● API’s
// Instructions
// Let's create a small movie app.
// We will be using the OMDB API.
// We need to register for an API key here.
// You will get an email with your unique API key.
// Read the documentation on what you can do with this API.
// To have some influence look here
// We want a user to type a movie name at the input and get
// the data displayed on the screen:
// 1. Movie poster
// 2. Movie title
// 3. Genre
// 4. Year
// 5. Plot
// 6. Director
// 7. Actors
// 8. Ratings of movies from IMDB, rotten tomatoes, and
// Metacritic. (make sure that particular movie gives you all
// the ratings. It could be, that movie won’t give you all 3
// ratings)
// Each time a user searches for a new movie remove the old
// movie from the screen.
const input = document.querySelector("#username");
const button = document.querySelector("#search-button");
const output = document.querySelector("#output");

button.addEventListener("click", async () => {
    try {
        const movieName = input.value;
        const response = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=a5faac9`);
        const data = await response.json();

        output.innerHTML = `
          <div class="card">
            <img src="${data.Poster}" alt="${data.Title}">
            <h2>${data.Title} (${data.Year})</h2>
            <p><strong>Genre:</strong> ${data.Genre}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
            <p><strong>Director:</strong> ${data.Director}</p>
            <p><strong>Actors:</strong> ${data.Actors}</p>
            <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
            <p><strong>Rotten Tomatoes:</strong> ${data.Ratings[1].Value}</p>
            <p><strong>Metacritic:</strong> ${data.Ratings[2].Value}</p>
          </div>
        `;
    } catch (err) {
        console.error(err);
        output.innerHTML = "No movie was found with that name. Please try again.";
    }
});

