/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //store val of of first index as checker
    let checker = nums[0];
    //loop nums starting at second index
    for (let i = 1; i < nums.length; i++) {
        //check if checker is same as current index
        if (checker === nums[i]) {
        //if it is, remove current index from nums
        nums.splice(i, 1)
        i--
        }
        //if its not the same, set checker to current index
        else {
            checker = nums[i]
        }
    }
    return nums.length;
    //return nums.length
    
};