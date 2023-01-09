
function boom(n) {
    const str = []
    for (let i = 1; i <= n; i++) {
        if (i % 7 === 0 && i.toString().includes('7')) {
            str.push("Boom boom")
        }
        else if (i % 7 === 0) {
            str.push("BOOM")
        }
        else {
            str.push(i);
        }
    }
    return str
}


console.log(boom(100));
