/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let a = 0;
    let b = numbers.length - 1
    console.log(b)
    for (let i = 0; i < numbers. length; i++) {
        if (numbers[a] + numbers[b] === target) {
            return [a + 1, b + 1]
        }
       if (numbers[a] + numbers[b] > target) {
            b--
        }
       if (numbers[a] + numbers[b] < target) {
            a++
       }

    }
};