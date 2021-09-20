/**
 * Space O(n) | Time Linear O(n)
 * Notes: We use a hashmap and for loop to iterate over each value of the array and check if the difference between 
  the targetSum and the current value is present in the hashmap. If present, then we return currentValue and the targetNum, 
  else store the currentNum in the hashmap.
**/

function twoNumberSum(array, targetSum) {
	let prevNums = {};
	
	for (let i = 0; i < array.length; i++) {
		let currentNum = array[i];
		let targetNum = targetSum - currentNum;
		
		if (targetNum in prevNums) {
			return [targetNum, currentNum];
		} else {
			prevNums[currentNum] = currentNum;
		}
	}
	
	return [];
}