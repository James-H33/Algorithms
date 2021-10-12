/**
 * @param {string[]} strs
 * @return {string}
 * Space 0(1)
 * Time O(n^2)
 * Notes: 
 */
var longestCommonPrefix = function (strs) {
  let longestPrefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let k = 1; k < strs.length; k++) {
      if (strs[k][i] !== char) {
        return longestPrefix;
      }
    }

    longestPrefix = longestPrefix + char;
  }

  return longestPrefix;
};
