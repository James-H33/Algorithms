/**
 * @param {string} s
 * @return {number}
 * Space O(n) | Time O(n)
 * Notes: Iterate over the string values and track each time the character is found in the string.
 *  Then iterate a second time to find the first non-repeating char
 */
 var firstUniqChar = function(s) {
    let visitedChars = {};
    
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      
      if (char in visitedChars) {
        visitedChars[char]++;   
      } else {
        visitedChars[char] = 1;
      }
    }
    
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      let visitedCount = visitedChars[char];
      
      if (visitedCount === 1) {
          return i;
      }
    }
    
    return -1;
  };