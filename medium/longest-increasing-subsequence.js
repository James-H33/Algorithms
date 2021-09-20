/**
 * @param {number[]} nums
 * @return {number}
 * Dynamic Programming Solution
 * Space O(n) | Time O(n^2)
 */
var lengthOfLIS = function (nums) {
  let maxSeqCache = Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] < nums[k]) {
        maxSeqCache[i] = Math.max(maxSeqCache[i], maxSeqCache[k] + 1);
      }
    }
  }

  return Math.max(...maxSeqCache);
};

/**
 * @param {number[]} nums
 * @return {number}
 * Space O(n) | Time O(n^2)
 * Slight optimization over the previous.
 */
var lengthOfLIS = function (nums) {
  let max = 0;
  let maxSeqCache = Array(nums.length).fill(1);

  if (nums.length === 1) {
    return 1;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] < nums[k]) {
        maxSeqCache[i] = Math.max(maxSeqCache[i], maxSeqCache[k] + 1);
      }

      if (maxSeqCache[i] > max) {
        max = maxSeqCache[i];
      }
    }
  }

  return max;
};


/*
  Slightly faster then above
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  let max = 0;
  let seqMaxCache = Array(nums.length).fill(1);
  
  if (nums.length === 0) {
      return 0;
  }
  
  if (nums.length === 1) {
    return 1;
  }
  
  for (let i = nums.length - 1; i >= 0; i--) {
    let current = nums[i];
    
    for (let j = i + 1; j < nums.length; j++) {
      if (current < nums[j]) {
          seqMaxCache[i] = Math.max(seqMaxCache[i], 1 + seqMaxCache[j]);
      }
      
      if (seqMaxCache[i] > max) {
          max = seqMaxCache[i];
      }
    }
  }
  
  return max;
};