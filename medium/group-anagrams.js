/*
    https://www.algoexpert.io/questions/Group%20Anagrams
    Space O(n) - Where n is the number of words
    Time O(w * log(n))
*/
function groupAnagrams(words) {
  let map = {};
  let sortedWords = [];
  let groups = [];

  for (let i = 0; i < words.length; i++) {
    let w = words[i].split("");

    sortedWords[i] = w.sort().join("");
  }

  let index = 0;

  for (let i = 0; i < sortedWords.length; i++) {
    let w = sortedWords[i];

    if (w in map) {
      let groupIndex = map[w];

      groups[groupIndex].push(words[i]);
    } else {
      groups.push([words[i]]);
      map[w] = index;
      index++;
    }
  }

  return groups;
}
