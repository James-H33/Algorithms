/*
    https://www.algoexpert.io/questions/Monotonic%20Array
    Space O(1)
    Time O(n)
    Notes: Iterate once. Discover the initial direction of the sequence and then keep comparing the prev and curr values of the array.
*/
function isMonotonic(array) {
	if (array.length < 2) {
		return true;
	}
	
	let idx = 1;
	let direction = 1;
	
	while (array[idx - 1] === array[idx]) {
		idx++;
		
		if (idx === array.length) {
			return true;
		}
	}
	
	if (array[idx - 1] > array[idx]) {
		direction = -1;
	}
	
	for (let i = 1; i < array.length; i++) {
		let curr = array[i];
		let prev = array[i - 1];
		
		if (direction === -1 && doNegativeCompare(prev, curr)) {
			return false;
		}
		
		if (direction === 1 && doPositiveCompare(prev, curr)) {
			return false;
		}
	}
	
	return true;
	
	function doNegativeCompare(prev, curr) {
		if (prev < curr) {
			return true;
		} 
		
		return false;
	}
	
	function doPositiveCompare(prev, curr) {
		if (prev > curr) {
			return true;
		} 
		
		return false;
	}
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
