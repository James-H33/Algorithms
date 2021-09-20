/**
 * @param {string} s
 * @return {number}
 * Space O(1) | Time O(n^2)
 * Time is O(n^2) because if we are given a string of "aaaaa" we will need to iterate through every value multiple times.
 * Notes: Iterate through the string and for each index call a function that will compare the left and right values of it's mid point 
 * until a non-matching value is found. We up count for each matching value within palindromeSearch.
 */
var countSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    palidromeSearch(i, i);
    palidromeSearch(i, i + 1);
  }

  return count;

  function palidromeSearch(l, r) {
    let left = l;
    let right = r;

    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) {
        break;
      }

      count++;
      left--;
      right++;
    }
  }
};

/**
 * @param {string} s
 * @return {number}
 * Brute Force:
 * Space O(1) | Time (n^2)
 */
var countSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let k = i; k < s.length; k++) {
      let letters = s.substring(i, k + 1);

      if (letters === letters.split("").reverse().join("")) {
        count++;
      }
    }
  }

  return count;
};
