/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    // Loop through each string in the input array
    for (let str of strs) {
        // Sort the characters in the string to form the key
        let sortedStr = str.split("").sort().join("");
        
        // If the key is not in the map, add it with a new array
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        // Add the original string to the array associated with the sorted key
        map.get(sortedStr).push(str);
    }

    // Return all the values from the map, which are the grouped anagrams
    return Array.from(map.values());
};