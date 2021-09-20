/**
 * @param {string} s
 * @return {boolean}
 * Space O(1) || Time O(n)
 * Notes: while loop with two pointers left and right. Move each pointer to towards the center and move each individualy pointer if char code is not valid.
 */

var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;
    
    while (l <= r) {
      let left = s[l].toLowerCase().charCodeAt(0);
      let right = s[r].toLowerCase().charCodeAt(0);
      
      if (!isValidChar(left)) {
        l++;
        continue;
      }
      
      if (!isValidChar(right)) {
        r--;
        continue;
      }
      
      if (left !== right) {
          return false;
      }
      
      l++;
      r--;
    }
    
    return true;
  };
  
  function isValidChar(code) {
    if (code > 96 && code < 123 || code > 47 && code < 58) {
      return true;   
    }
    
    return false;
  }