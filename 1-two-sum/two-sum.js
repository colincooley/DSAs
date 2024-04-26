/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //loop through array
    for (let i = 0; i < nums.length; i++) {
        //for each index, loop through indexes again
        for (let j = i + 1; j < nums.length; j++) {
        //check if loop1 index + current index eq target
        if (nums[i] + nums[j] === target) {
            //if it does, return [loop1 index, current index
            return [i, j];
            }
        }
    }
    return null
        //else return null
};