/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Space O(1) | Time O(n)
 * Notes: To start we set up 3 initial variables. Max is the overall max product that can reached  by the end of the iteration. PrevMax is the max value possible of
 * each iteration that is then used to determine the next prevMax and max. PrevMin is used to calculate the min value of each iteration and is then used 
 * in the next iteration to determine the next max. The reason for prevMin is that we could have a situation where the prevMax = 3 and the prevMin = -6, and if in the
 * next iteration we come across a -5, the biggest product we can reach based on the prevMin and prevMax would be nums[i] * prevMin, -6 * -5 = 30.
 */
 const maxProduct = function(nums) {
    let max = nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
      let n = nums[i];
      let curMax = Math.max(prevMax * n, n, prevMin * n);
      let curMin = Math.min(prevMax * n, n, prevMin * n);
      
      prevMax = curMax;
      prevMin = curMin;
      
      max = Math.max(max, curMax);
    }
  
    return max;
  };