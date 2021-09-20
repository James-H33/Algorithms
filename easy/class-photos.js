/*
    Initial Thoughts:
    - Method: 
    - Sort both arrays and then determine which array has the lowest starting value and the create the first row with that. Then alternate
        with the non-starting array and create another row and so on.
        
    - Example: 
        RedShirts = [5, 8, 1, 3, 4]
        BlueShirts = [6, 9, 2, 4, 5]

    Space O(1) | Time O(n log(n))
    Notes: 
*/

function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a, b) => a - b);
	blueShirtHeights.sort((a, b) => a - b);
	
	if (redShirtHeights[0] > blueShirtHeights[0]) {
		return checkHeights(blueShirtHeights, redShirtHeights);
	} else {
		return checkHeights(redShirtHeights, blueShirtHeights);
	}
}

function checkHeights(startRowArr, secondRowArr) {
	for (let i = 0; i < startRowArr.length; i++) {
		if (startRowArr[i] >= secondRowArr[i]) {
			return false;
		}
	}
	
	return true;
}