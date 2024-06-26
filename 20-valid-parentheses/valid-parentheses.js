/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                return false;
            }
            var top = stack.pop();
            if ((s[i] === ')' && top !== '(') ||
                (s[i] === ']' && top !== '[') ||
                (s[i] === '}' && top !== '{')) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};
