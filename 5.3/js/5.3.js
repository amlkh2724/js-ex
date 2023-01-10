const isPass = (password) => {
    return (password.length > 7 && /[A-Z]/.test(password) ? "Very Strong" : password.length === 7 ? "Strong" : "Weak")
}

console.log(isPass("aSASDASDAA"));