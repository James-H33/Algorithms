/*
    Space O(1)
    Time O(n)
    Notes: Use modulo operator. Iterate using a while loop and count the number of visited elements. If we reach a index of 0 before we 
    reach the end of the elements then we have made a cycle to soon. 
*/
function hasSingleCycle(array) {
	let visitedCount = 0;
	let moveIndex = 0;
	
	while (visitedCount < array.length) {
		if (visitedCount > 0 && moveIndex === 0) {
			return false;
		}
		
		updateMoveIndex();
		visitedCount++;
	}	
	
	return moveIndex === 0;
	
	function updateMoveIndex() {
		let jump = array[moveIndex];
		let nextIdx = (moveIndex + jump) % array.length;

		moveIndex = nextIdx >= 0 ? nextIdx : nextIdx + array.length;
	}
}