/**
 * @param {number} x
 * @return {boolean}
 * Space O(1)
 * Time O(n)
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let s = x.toString();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let l = s[left];
    let r = s[right];

    if (l !== r) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
