/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    let i = 0;

    while (i < nums.length) {
        pulo = nums[i];

        i += pulo;

        if (i >= nums.length || (pulo == 0 && nums.length > i)) return false;
        else if (i == nums.length - 1) return true;
    }  
}

console.log(canJump([2,3,1,1,4]));