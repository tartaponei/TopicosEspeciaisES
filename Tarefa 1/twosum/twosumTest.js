const erroArray = "erro: array fora dos limites";
const erroAlvo = "erro: alvo fora dos limites";
const erroNum = "erro: número fora dos limites";

// reimplementação
function twosumTest(nums, target){
    if (nums.length > 2**3 || nums.length < 2) {
        return erroArray;
    }

    if (target > 10**5 || target < (-10) **5) {
        return erroAlvo;
    }

    for (let i = 0; i < nums.length; i++) {
        if (i == nums.length) {
            break;
        }

        if (nums[i] > 10**4 || nums[i] < -(10**4)) {
            return erroNum;
        }

        for (let p = i + 1; p < nums.length; p++) {
            if (nums[i] + nums[p] == target) {
                return [i,p];
            }
        }
    }
}

module.exports = twosumTest;