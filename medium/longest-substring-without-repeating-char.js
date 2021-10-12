/**
 * @param {string} s
 * @return {number}
 * Brute Force
 */
 var lengthOfLongestSubstring = function(str) {
    let charsCount = { };
    let longestCount = 0;

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        let runningCount = 1;
        charsCount[currentChar] = 1;

        for (let j = i + 1; j < str.length; j++) {
            const innerChar = str[j];

            if (innerChar in charsCount) {
                break;
            }

            charsCount[innerChar] = 1;
            runningCount++;
        }

        charsCount = {};

        if (runningCount > longestCount) {
            longestCount = runningCount;
        } 
    }

    return longestCount;
};

/**
    * https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
    * Space O(n)
    * Time O(n)
    * Notes: Use hashmap where each character is the key and the index of the last time we saw that character is the value. As we interate 
    * we check the hashmap to check if we have seen this character before and if so we (+1) the index of the startIndex variable.
 */
 var lengthOfLongestSubstring = function(s) {
    let startIndex = 0;
    let longest = 0;
    let charMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      
      if (charMap.get(char) >= startIndex) {
          startIndex = charMap.get(char) + 1;
      }
      
      charMap.set(char, i);
      
      longest = Math.max(longest, i - startIndex + 1);
    }
    
    return longest;
  };