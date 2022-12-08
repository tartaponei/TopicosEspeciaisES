var erroArray = "erro: array fora dos limites";
var erroNum = "erro: numero fora dos limites";

function combinationsumTest(nums, target) {
    if (nums.length > 2**2 || nums.length < 2) {
        return erroArray;
    }

    nums.sort((a, b) => a - b);

    let resArr = [];
    let tryArr = [];
    
    return trycomb(target, 0);
    
    function trycomb(remain, start) {
        if (remain === 0) {
            return resArr.push(tryArr.slice());
        } 

        const numsLen = nums.length
        for (let i = start; i < numsLen; i++) {
            if (nums[i] > 100 || nums[i] < -100) {
                return erroNum;
            }

            const curNum = nums[i]
            if (curNum > remain) continue;
            
            tryArr.push(curNum);
            trycomb(remain - curNum, i);
            tryArr.pop();
        }
        return resArr;
    }
}


//console.log(combinationsum([2,3,6,7], 7))
module.exports = combinationsumTest;