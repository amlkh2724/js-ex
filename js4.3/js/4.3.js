function challenge() {
    // johnteam
    let johnTeam = [89, 120, 103]
    let sumJohn = 0
    let count = 0
    for (let i = 0; i < johnTeam.length; i++) {
        count++
        sumJohn += johnTeam[i]

    }
    let averageTeam1 = sumJohn / count
    console.log(averageTeam1);

    // mika team
    let mikaTeam = [116, 94, 123]
    let sumMika = 0
    let counter = 0
    for (let i = 0; i < mikaTeam.length; i++) {
        counter++
        sumMika += mikaTeam[i]

    }
    var averageTeam2 = sumMika / count
    console.log(averageTeam2);

    // mary team
    let maryTeam = [97, 134, 105]
    let sumMary = 0
    let counerm = 0
    for (let i = 0; i < johnTeam.length; i++) {
        counerm++
        sumMary += maryTeam[i]

    }
    let averageTeam3 = sumJohn / counerm
    console.log(averageTeam3);


    if (averageTeam1 > averageTeam2 && averageTeam1 > averageTeam3) {
        console.log("john team win");
    }
    else
        if (averageTeam2 > averageTeam1 && averageTeam2 > averageTeam3) {
            console.log("mika team win");
        }
        else
            if (averageTeam3 > averageTeam1 && averageTeam3 > averageTeam2) {
                console.log("mary team win");
            }
            else {
                console.log("equal score");
            }


}
console.log(challenge());