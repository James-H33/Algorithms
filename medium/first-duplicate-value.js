/*
    Space O(n)
    Time O(n)
    Notes: Iterate and store each vistited value in a hash map until you reach value that is already in the map.
*/
function firstDuplicateValue(array) {
	const map = {};
	
	for (let i = 0; i < array.length; i++) {
		let n = array[i];
		
		if (n in map) {
			return n;
		} else {
			map[n] = 1;
		}
	}
	
    return -1;
}
