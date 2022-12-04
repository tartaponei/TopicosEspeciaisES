function generateRandomInt(m, n) {
    return (Math.floor(Math.random() * (n - m + 1)) + m);
}

console.log(generateRandomInt(2, 3));