/**
 * @param {number[]} nums
 * @return {number}
 * Space O(n) | Time O(n)
 * Notes: First we set nums[0] to the largestSum and we set the first value of sums array nums[0]. We do this so we have a 
 * starting value for both variables. Then we loop over nums starting at position 1, for each iteration we calculate the sum of the
 * previously highest possible value in sums array and the current nums[i] value. We then compare that sum with the value of nums[i]
 * itself. This way we are making sure that we don't populate sums[i] with a value that is lesser than what nums[i] is without the previous sum
 * included. During the same iteration we will compare the largest sum of the current iteration to the overall largestSum value.
 */
 var maxSubArray = function(nums) {
    let largestSum = nums[0];
    const sums = Array(nums.length).fill(0);
    
    sums[0] = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
      let nextSum = sums[i - 1] + nums[i];
      let sum = Math.max(nextSum, nums[i]);
      sums[i] = sum;
      
      if (largestSum < sum) {
          largestSum = sum;
      }
    }
    
    return largestSum;
  };