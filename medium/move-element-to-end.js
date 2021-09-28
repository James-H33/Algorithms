/*
 * Space O(1) 
 * Time O(n)
 * Notes: Use two pointers starting at opposite ends, and move the left pointer to the right until you a value that needs 
 * to be moved. Then you the right pointer to find a spot to move it to.
*/
function moveElementToEnd(array, toMove) {
	let l = 0;
	let r = array.length - 1;
	
	while (l < r) {
		if (array[l] === toMove) {
			while (l < r) {
				if (array[r] !== toMove) {
					array[l] = array[r];
					array[r] = toMove;
					break;
				} else {
					r--;
				}
			}
		} else {
			l++;
		}
	}
	
	return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
