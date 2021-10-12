/*
 * https://www.algoexpert.io/questions/Generate%20Document
 * Space O(c) - where c is the character string
 * Time O(n + m) - where n is the character string and m is the document string
*/
function generateDocument(chars, doc) {
  let charMap = {};

  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    charMap[char] = char in charMap ? charMap[char] + 1 : 1;
  }

  let remainingChars = doc.length;

  for (let i = 0; i < doc.length; i++) {
    let char = doc[i];

    if (char in charMap && charMap[char] > 0) {
      charMap[char]--;
      remainingChars--;
    } else {
      return false;
    }
  }

  return remainingChars === 0;
}
