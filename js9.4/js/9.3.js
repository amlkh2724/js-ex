// const vibefunc=(N)=>{
//     // let steps=""
//     for(let i=0;i<N;i++){
//      console.log("#");
//     }
// }
// console.log(vibefunc(2));


const vibefunc = (N) => {
    for (let i = 0; i < N; i++) {
        let steps = ""
        for (let j = 0; j < i; j++) {
            steps += "#"

        }
        for (let q = i; q < i; q++) {
            steps += " "

        }
        console.log(steps);
    }

}
vibefunc(6)
// console.log(vibefunc(6));