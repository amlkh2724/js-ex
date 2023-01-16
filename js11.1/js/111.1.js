
const movies = [
    { id: 1, name: "shark" },
    { id: 2, name: "golden" },
    { id: 3, name: "escape" },
    { id: 4, name: "pizzle" },
];
// for each
let array = []
movies.forEach(movie => {
    array.push({
        name: movie.name,
        id: movie.id
    })
});
console.log(array);



// map method
const movieid = movies.map(movie => {
    return {
        name: movie.name,
        id: movie.id
    }
})
console.log(movieid);