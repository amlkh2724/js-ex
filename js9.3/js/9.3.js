const food = ["Noodle", "Pasta", "Ice-cream",
    "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
    "Olives", "Hamburgers"];

const twoarrays = (arr1, arr2) => {
    let items = []
    for (let i = 0; i < arr1.length; i++) {
        let indexfood = arr1[i]
        for (let j = 0; j < arr2.length; j++) {
            if (indexfood === arr2[j]) {
                items.push(indexfood)
            }

        }
    }
    if (items.length === 0) {
        return false
    }
    else {
        return items
    }
}
console.log(twoarrays(food, food1));