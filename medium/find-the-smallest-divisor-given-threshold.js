/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 * https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/submissions/
 * Space O(1)
 * Time O(n * log(m)) - Where n is the nums array and m is the number of binary search iterations that are made.
 * Notes: We take a low and a high based on the largest num in nums array and do a binary search on the all 
 * the numbers between the high and the low.
 */
var smallestDivisor = function (nums, threshold) {
  let low = 1;
  let high = Math.max(...nums);

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (isValid(mid)) {
      high = mid;
    } else {
      low = low === mid ? mid + 1 : mid;
    }
  }

  return high;

  function isValid(divisor) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
      sum += Math.ceil(nums[i] / divisor);
    }

    return sum <= threshold;
  }
};


console.log(smallestDivisor([1,2,5,9], 6));