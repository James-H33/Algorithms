/*
 * https://www.algoexpert.io/questions/Reverse%20Words%20In%20String
 * Space O(n)
 * Time O(n)
*/
function reverseWordsInString(string) {
  let stringSections = [];
  let index = 0;
  let prev = -1;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (i === 0) {
      if (char === " ") {
        prev = -1;
      } else {
        prev = 1;
      }
    }

    if (prev < 0 && char === " ") {
      continue;
    }

    if (prev > 0 && char !== " ") {
      continue;
    }

    stringSections.unshift(string.substring(index, i));

    if (prev < 0) {
      prev = 1;
    } else {
      prev = -1;
    }

    index = i;
  }

  stringSections.unshift(string.substring(index, string.length));

  return stringSections.join("");
}
