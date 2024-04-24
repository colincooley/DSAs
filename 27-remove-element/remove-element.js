/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //loop nums
    for (i=0; i<nums.length; i++) {
        //check if index equals val
        if (nums[i] === val) {
        //if it does splice current index
        nums.splice(i, 1)
        i--
        }
    }
    //return nums.length
    return nums.length
};