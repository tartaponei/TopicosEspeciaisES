/**
 * @param {number} x
 * @return {boolean}
 */
function ispalindrome(x) {
    if (x > (2 ** 10)+1 || x < -(2 ** 10)) {
        return "erro: numero fora dos limites"
    }
    var xStr = x.toString();

    var xRev = "";

    for (var i = 1; i < xStr.length + 1; i++) {
        xRev += xStr.charAt(xStr.length - i);
    }

    if (xRev == xStr) {
        return true;
    }
    else { return false; }
};


module.exports = ispalindrome;