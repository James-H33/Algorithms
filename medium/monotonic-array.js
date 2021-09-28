/*
    Space O(1)
    Time O(n)
    Notes: Iterate once. Discover the initial direction of the sequence and then keep comparing the prev and curr values of the array.
*/
function isMonotonic(array) {
	let direction = 0;
	
	for (let i = 1; i < array.length; i++) {
		let prev = array[i - 1];
		let curr = array[i];
		
		if (direction === 0) {
			if (prev === curr) {
				continue;
			} else if (prev > curr) {
				direction = -1;
			} else {
				direction = 1;
			}
			
			continue;
		}
	
		
		if (direction < 0 && prev >= curr) {
			continue;
		}
		
		if (direction > 0 && prev <= curr) {
			continue;
		}
		
		return false;
	}
	
	return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
