/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Space O(n) | Time O(n)
 */
 var twoSum = function(nums, target) {
    let numsMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
      
        if (difference in numsMap) {
            return [i, numsMap[difference]];
        } else {
          numsMap[nums[i]] = i;
        }
    }
  };