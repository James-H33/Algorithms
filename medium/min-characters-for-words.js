
/*
    * https://www.algoexpert.io/questions/Minimum%20Characters%20For%20Words
    * Space O(c) - c is the number of unique characters
    * Time O(n * 1)
*/
function minimumCharactersForWords(words) {
  let map = {};
  let output = [];

  for (let word of words) {
    let localMap = {};

    for (let i = 0; i < word.length; i++) {
      let c = word[i];

      if (c in localMap) {
        localMap[c]++;
      } else {
        localMap[c] = 1;
      }

      updateGlobalMap(c, localMap);
    }
  }

  let keys = Object.keys(map);
  let i = 0;

  while (i < keys.length) {
    let key = keys[i];

    if (map[key] > 0) {
      output.push(key);
      map[key]--;
    } else {
      i++;
    }
  }

  return output;

  function updateGlobalMap(c, localMap) {
    if (c in map) {
      map[c] = Math.max(map[c], localMap[c]);
    } else {
      map[c] = 1;
    }
  }
}
