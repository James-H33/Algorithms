/**
 * @param {number[]} nums
 * @return {boolean}
 * Space O(n) | Time O(n)
 */
 var containsDuplicate = function(nums) {
    let seen = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in seen) {
        return true;
    } else {
      seen[nums[i]] = nums[i];
    }
  }
  
  return false;
};