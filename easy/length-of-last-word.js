/**
 * @param {string} s
 * @return {number}
 * Start doing a reverse for loop and keep track of the first time you reach a non space character. Then count each non-space character
 * until you either reach 0 or another space character.
 * 
 */
 var lengthOfLastWord = function(s) {    
    if (s.length === 1) {
        return 1;
    }
    
    let count = 0;
    let hasReachedNonWhiteSpace = false;
    
    for (let i = s.length - 1; i >= 0; i--) {
      let char = s[i];
      
      if (char !== ' ') {
        if (!hasReachedNonWhiteSpace) {
          hasReachedNonWhiteSpace = true;
        }
        
        count++;
      } else {
        if (hasReachedNonWhiteSpace) {
          return count;
        }
      }
    }
    
    return count;
  };