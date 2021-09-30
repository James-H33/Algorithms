
/*
    https://www.algoexpert.io/questions/Max%20Subset%20Sum%20No%20Adjacent
    Space O(n)
    Time O(n)
    Notes: DP, Do base cases for the first to values. Create a sum array that is filled with 0's of the same length as the in coming array. 
    On each iteration, starting at index 2, compare the non-adjacent sumArray + current array index value, with the previous sumArray value, 
    set which ever value is bigger to the sumArray[currentIndex]. Then compare current max value with the max value achievable so far.
*/
function maxSubsetSumNoAdjacent(array) {
  const sumArray = Array(array.length).fill(0);
  let max = 0;

  if (array.length === 1) {
    return array[0];
  }

  if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  }

  sumArray[0] = array[0];
  sumArray[1] = sumArray[0] > array[1] ? sumArray[0] : array[1];

  for (let i = 2; i < array.length; i++) {
    let currentNum = array[i];
    let currentSum = sumArray[i - 2] + currentNum;
    currentSum = Math.max(currentSum, sumArray[i - 1]);
    sumArray[i] = currentSum;
    max = Math.max(max, currentSum);
  }

  return max;
}
