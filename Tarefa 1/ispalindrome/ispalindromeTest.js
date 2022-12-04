function ispalindromeTest(x){
    if (x > (2 ** 10)+1 || x < -(2 ** 10)) {
        return "erro: numero fora dos limites"
    }

    let xStr = x.toString();

    let xRev = "";

    for (let i = 1; i < xStr.length + 1; i++) {
        xRev += xStr.charAt(xStr.length - i);
    }

    if (xRev == xStr) return true;
    else return false; 
}

module.exports = ispalindromeTest;