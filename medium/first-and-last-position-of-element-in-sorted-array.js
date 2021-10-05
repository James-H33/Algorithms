/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Space O(log n)
 * Time O(log n)
 * Implement Binary Search to find a start index, if one is found then we set a left and right pointer to the start index. We then
 * use a while loop to search out one more index left or right until we can't anymore. Then return left and right pointer in an array.
 */
const searchRange = function (nums, target) {
  let startIndex = null;
  let output = [-1, -1];

  startIndex = search(0, nums.length - 1);

  if (startIndex === null) {
    return output;
  }

  return findRange(startIndex);

  function findRange(i) {
    let left = i;
    let right = i;
    let leftDone = false;
    let rightDone = false;

    while (true) {
      if (nums[left - 1] === target) {
        left--;
      } else {
        leftDone = true;
      }

      if (nums[right + 1] === target) {
        right++;
      } else {
        rightDone = true;
      }

      if (leftDone && rightDone) {
        break;
      }
    }

    return [left, right];
  }

  function search(left, right) {
    if (left > right) {
      return null;
    }

    let midPoint = Math.floor((left + right) / 2);
    let val = nums[midPoint];

    if (val === target) {
      return midPoint;
    } else if (val > target) {
      return search(left, midPoint - 1);
    } else {
      return search(midPoint + 1, right);
    }
  }
};
