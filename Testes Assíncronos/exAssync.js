async function somaAssync (num1, num2) {
    return new Promise ((resolve, reject) => {
        if ((typeof num1) != 'number' || (typeof num2) != 'number') {
            reject("algum dado não é numero");
        }

        else {
            let total = num1 + num2;
            resolve(total);
        }
    });
}

async function ordenaAssync (nums) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < nums.length; i++) {
            if ((typeof nums[i]) != "number") {
                reject("algum dado não é um número");
            }
        }

        resolve(nums.sort())
    });
}

module.exports.somaAssync = somaAssync;
module.exports.ordenaAssync = ordenaAssync;