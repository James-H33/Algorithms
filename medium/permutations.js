/*

*/
function getPermutations(array) {
  let permutations = [];
  generate(array, []);
  return permutations;

  function generate(arr, res) {
    if (!arr.length && res.length) {
      permutations.push(res);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
        let k = [...res, arr[i]];
        generate(newArr, k);
      }
    }
  }
}
