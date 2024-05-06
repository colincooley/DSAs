/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //remove spaces and punctuation from s
    let str = s.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
    //if empty return true
    if (str === "") {
        return true
    }

    //create two pointers one at start of s and one at end of s
    let first = 0;
    let last = str.length -1
    let half = str.length / 2
    //iterate through s for length/2
    for (let i = 1; i <= half; i++) {
        //compare pointer 1&2
        if (str[first] != str[last]) {
        //if they are not equal, return false
        return false
        }
        first++
        last--
    }
    //return true if loop finishes
    return true
};