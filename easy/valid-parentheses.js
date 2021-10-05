/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 * Space O(1)
 * Time O(n)
 * Notes: User stack and hashmap. Add paren to map if open brackets and use map to determine if closing brack is a match to the last item added to the stack.
 */
 var isValid = function(s) {
    let stack = [];
    let map = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    
    for (let i = 0; i < s.length; i++) {
      let curr = s[i];
      
      if (curr in map) {
          stack.push(curr);
      } else {
        let parenFromStack = stack[stack.length - 1];
        
        if (map[parenFromStack] === curr) {
            stack.pop();
        } else {
          return false;
        }
      }
    }
    
    return stack.length === 0;
  };