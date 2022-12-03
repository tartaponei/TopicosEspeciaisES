/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const erroArray = "erro: array fora dos limites";
const erroAlvo = "erro: alvo fora dos limites";
const erroNum = "erro: número fora dos limites";

function twoSum(nums, target) {
    if (nums.length > 2**3 || nums.length < 2) {
        return erroArray;
    }

    if (target > 10**5 || target < (-10) **5) {
        return erroAlvo;
    }

    for(var i = 0; i < nums.length; i++) {
        let atual = nums[i];

        if (atual > 10**4 || atual < -(10 **4)) {
            return erroNum;
        }

        for (let p = i + 1; p < nums.length; p++) {
            let proxLista = nums[p];

            if (atual + proxLista == target) {
                return [i, p];
            }
        }
    }
}

module.exports = twoSum;
exports.erroArray = erroArray;
exports.erroAlvo = erroAlvo;
exports.erroNum = erroNum;

//nums = [3,5,2,4];
//target = 6;
//console.log(twoSum(nums, target));