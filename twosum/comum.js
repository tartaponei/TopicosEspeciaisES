function generateRandomInt(m, n) {
    return (Math.floor(Math.random() * (n - m + 1)) + m);
}

// função pra gerar dois números do array pra ver o target
function getRandomSum(nums) {
    let num1 = 0;
    let num2 = 0;


    while (num1 == num2) {
        num1 = generateRandomInt(0, nums.length-1);
        num2 = generateRandomInt(0, nums.length-1);
    }

    console.log(num1);
    console.log(num2);

    return parseInt(nums[num1]) + parseInt(nums[num2]);
}

module.exports.generateRandomInt = generateRandomInt;
module.exports.getRandomSum = getRandomSum;
