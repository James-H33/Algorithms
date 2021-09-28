/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Space O(n) | Time O(n)
 * Two passes, loop through the first string and create a map of the characters. Loop through the 
 * second string and match the charMap with the characters in the current string.
 */
 var isAnagram = function(s, t) {
    let charMap = {};
    
    if (s.length !== t.length) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] in charMap) {
        charMap[s[i]]++;
      } else {
        charMap[s[i]] = 1;
      }
    }
    
    let count = 0;
    
    for (let i = 0; i < t.length; i++) {
      if (t[i] in charMap && charMap[t[i]] > 0) {
        charMap[t[i]]--;
      } else {
        return false;
      }
    }
    
    return s.length !== count;
  };