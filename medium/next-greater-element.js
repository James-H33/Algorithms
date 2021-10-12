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


/*
  Space O(n)
  Time O(n)
  Notes: Use a stack to hold the index of elements that we have already passed in our loop. At each iteration check if the top value on
  the stack is less than the current iteration value. If so, pop that last index on the stack and set the current iteration value to index popped from
  the stack. A tricky bit is the circular component of the question. We need to use a modulo operator operator after we pass the original size of the array in
  the iteration to get back to the beggining of the values.
*/

// function nextGreaterElement(array) {
// 	let output = Array(array.length).fill(-1);
// 	const stack = [];
	
// 	for (let i = 0; i < array.length * 2; i++) {
// 		let index = i % array.length; 
		
// 		while (stack.length && array[stack[stack.length - 1]] < array[index]) {
// 			let top = stack.pop();
// 			output[top] = array[index];
// 		}
		
// 		stack.push(index);
// 	}
	
// 	return output;
// }
