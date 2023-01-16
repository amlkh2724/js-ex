const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}


//     1. Implement the following getCandy function:
// The function should return the candy element with
// the specified id.

function getCandy(candyStore, id) {
    for (let specified of candyStore.candies) {
        if (specified.id === id) {
            return specified;
        }
    }
    console.log("Candy not found");
}
console.log(getCandy(candyStore, "5hd7y"));

// 2. Implement the following getPrice function:
// The function should return the price (number) of the
// candy with the specified id.


function getPrice(candyStore, id) {
    for (let candy of candyStore.candies) {
        if (candy.id === id) {
            return candy.price
        }
    }
    console.log("Candy not found");
}
console.log(getPrice(candyStore, "5hd7y"));


// 3. Implement the following addCandy function:
// The function should add a new candy to the candy
// list in candyStore with a default amount of 1. The
// function will not return anything.


function addCandy(candyStore, id, name, price) {
    candyStore.candies.push({ id: '2', name: "kit", price: 2, amount: 1 })

}

// const candyStore = {
//     candies: [
//         {
//             name: "mint gum",
//             id: "as12f",
//             price: 2,
//             amount: 2
//         },
//         {
//             name: "twix",
//             id: "5hd7y",
//             price: 5,
//             amount: 4
//         },
//     ],
//     cashRegister: 200
// }
// 4. Implement the following buy function: The function
// should add the candy price to the cashRegister, and
// decrease the amount property of the relevant candy.

function buy(candyStore, candyId) {
    let idbuy
    for (let idx of candyStore.candies) {
        if (idx.id === candyId) {
            idbuy = idx
            break
        }

    }
    if (!idbuy) {
        console.log("id wrong");
    } else if (idbuy.amount === 0) {
        console.log("your amount is zero");
    }
    else {
        idbuy.amount--
        idbuy.price += candyStore.cashRegister
        return idbuy.name + " well done"
    }
}
console.log(buy(candyStore, "5hd7y"));
