function combinationSum(nums, target) {
    let combinations = [];
    nums.sort((a, b) => a - b);

    function backtrack(tempList, remaining, start) {
        for (let i = start; i < nums.length && nums[i] <= remaining; i++) {
            if (nums[i] === remaining) {
                combinations.push([...tempList, nums[i]]);
            } else {
                backtrack([...tempList, nums[i]], remaining - nums[i], i);
            }
        }
    }

    backtrack([], target, 0);
    return combinations;
}

console.log(combinationSum([1,2,3,4], 6));