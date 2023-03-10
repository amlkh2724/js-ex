const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

// {
//     hamburgers: 3,
//     sausages: 1,
//     salmon: 3,
//     pike: 2,
//     steak: 1,
//     lamb: 2,
//     tuna: 2,
//     barracuda: 1,
//     ham: 1,
//     chicken: 1,
//     bird: 1,
//     rooster: 1,
//     anchovies: 1
//     }


// 1. Create a function that returns all the names from the array.
function names() {
    data.forEach(function (names) {
        console.log(names.name);
    })
}
names()

// 2. Create a function that returns all the objects that are born
// before 1990.

function oldyear() {
    let years = []
    data.forEach(function (oldy) {
        if (oldy.birthday.split("-")[2] < 1990) {
            years.push(oldy)
        }
    })
    return years
}
console.log(oldyear());


// 3. Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.
function countfood() {

    let newobj = {}
    data.forEach(function (eachone) {
        for (const idx in eachone.favoriteFoods) {
            eachone.favoriteFoods[idx].forEach(countfood => {
                return newobj[countfood] ? newobj[countfood]++ : newobj[countfood]

            })
        }
    })
}










