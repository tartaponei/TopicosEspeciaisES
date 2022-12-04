/**
 * @param {number[]} digits
 * @return {number[]}
 */

function plusOne(digits) {
    let numeroInt = "";
    for (let i = 0; i < digits.length; i++) {
        let num = digits[i].toString();
        numeroInt += num;
    }
    
    numeroInt = BigInt(numeroInt);
    let somadoStr = (numeroInt + 1n).toString();

    let array = [];

    for (var i = 0; i < somadoStr.length; i++) {
        array.push(parseInt(somadoStr[i]));
    }

    return array;
};

console.log(plusOne([1,2,3]));