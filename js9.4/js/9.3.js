const postivenum = (N) => {
    // N = '#'

    for (let i = 0; i < N; i++) {
        let str = ""
        for (let j = 0; j < N; j++) {
            if (j <= i) {
                str += "#"
            }
            else {
                str += " "
            }

        }
        console.log(str);
    }
}
postivenum(4)