let populations = [28090, 2000000, 2000, 66000000];
const populationPercentages = (populations) => {
    let percentages = []
    let value = 7900
    for (let i = 0; i < populations.length; i++) {
        let represents = populations[i] / value * 100
        percentages.push(represents)
    }
    return percentages

}
console.log(populationPercentages(populations));



