/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * Space O(1) | Time O(n)
 * Notes: incrementaly work backwards in both given arrays and insert the larger number at a insertion index that starts at the end of nums1.
 */
 var merge = function(nums1, m, nums2, n) {
    let l = m - 1;
    let r = n - 1;
    let insertIndex = nums1.length - 1;
    
    while (l > -1 || r > -1) {
      let left = l < 0 ? -Infinity : nums1[l];
      let right = r < 0 ? -Infinity : nums2[r];
      
      if (right > left) {
          r--;
          nums1[insertIndex] = right;
      } else {
        l--;
        nums1[insertIndex] = left;
      }
      
      insertIndex--;
    }
  };