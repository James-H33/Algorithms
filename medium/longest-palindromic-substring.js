function longestPalindromicSubstring(string) {
  let longest = "";

  if (string.length === 0) {
    return "";
  }

  if (string.length === 1) {
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    let s = search(i, i);

    if (longest.length < s.length) {
      longest = s;
    }
  }

  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      let s = search(i - 1, i);

      if (longest.length < s.length) {
        longest = s;
      }
    }
  }

  return longest;

  function search(left, right) {
    while (left >= 0 && right < string.length) {
      if (string[left] === string[right]) {
        left--;
        right++;
      } else {
        break;
      }
    }

    return string.substring(left + 1, right);
  }
}
