/*
 * Space O(n) - This is due to the results array
 * Time O(n^2) - We iterate through the array at least once by the left and right pointers will traverse over the values
 * in the array several times.
 * Notes: Sort array, then iterate over the array with two additional pointers, and sum the value of each pointer to see if you have a combination
 * that matches the target.
*/
function threeNumberSum(array, targetSum) {
	array.sort((a, b) => a - b);
	let results = [];
	
	for (let i = 0; i < array.length; i++) {
		let curr = array[i];
		let l = i + 1;
		let r = array.length - 1;
		
		while (l < r) {
			const sum = curr + array[l] + array[r];
			
			if (sum === targetSum) {
				results.push([curr, array[l], array[r]]);
				r--;
			} else if (sum > targetSum) {
				r--;
			} else {
				l++;
			}
		}
	}
	
	return results;
}

