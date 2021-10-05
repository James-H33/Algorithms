/**
 * https://leetcode.com/problems/next-greater-element-ii/
 * Space O(n)
 * Time O(n)
 * Notes: Use a stack and conjoin a copy of nums array with itself to have to 2x nums. This is to compensate for the cycle type array.
 * Iterate over the value and add the items to a stack. Peak the last added item of the stack to see if the current item is greater than it.
 * If so, the pop that element and set the value.
 */
var nextGreaterElements = function (nums) {
  let stack = [];
  let output = Array(nums.length).fill(-1);
  let nlength = nums.length;
  nums = [...nums, ...nums];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][0] < nums[i]) {
      let [_, index] = stack.pop();
      output[index] = nums[i];
    }

    if (i < nlength) {
      stack.push([nums[i], i]);
    }
  }

  return output;
};
