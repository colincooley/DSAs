/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //create result array
    let result = [];
    //create a map
    let map = new Map();
    //iterate through nums
    for (num of nums) {
        //for each num check if it exist in map
        if (map.has(num)) {
        //if it does exist, increment value by 1
        map.set(num, map.get(num) + 1)
        } else {
        map.set(num, 1);
        }
        //else set current num in map with value of 1
    }
    //convert map to an array of key value pairs
    const counts = [...map.entries()];
    //sort map array
    counts.sort((k, v) => v[1] - k[1]);
    //loop through map array k times and push each index to result array
    for (let i = 0; i < k; i++) {
        result.push(counts[i][0])
    }
    //return result array
    return result
};