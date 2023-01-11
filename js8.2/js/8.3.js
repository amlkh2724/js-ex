const mycountry = {
    country: "israel",
    capital: "Jerusalem",
    language: "hebrew",
    population: 9361000,
    Neighbors: ["Pakistan", "China", "Nepal"],
    decribe: function () {
        console.log(`${this.country} has ${this.population} people, thier motherr tongue is Finnish, they
    have ${this.Neighbors.length} neighbouring countries and a capital called
    ${this.capital}`)
    },
    checkIsland: function () {
        this.isIsland = (this.Neighbors.length === 0) ? true : false
    },
}

mycountry.decribe();
mycountry.checkIsland();
console.log(mycountry.isIsland)
