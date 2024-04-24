/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //create result obj
    let counter = {}
    //loop nums
    for (let i = 0; i < nums.length; i++) {
        //for each index, check if it exists as property in obj
        if (counter[nums[i]]) {
        //if it does, return true
        return true
        } else {
        //if it doesn't, create a new property
        counter[nums[i]] = true
        }
    }
    return false
    //return false
};