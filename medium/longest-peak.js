/*

    Longest peak: https://www.algoexpert.io/questions/Longest%20Peak
    Space O(1) 
    Time O(n)
    Notes: We loop over each value and for each value that has a value to the left and right that is lower than itself 
    then we traverse values in both directions to find how long the peak is.
*/
function longestPeak(array) {
	let peak = 0;
	
	for (let i = 0; i < array.length; i++) {
		let curr = array[i];
		let l = i - 1;
		let r = i + 1;
		
		let isPeak = curr > array[l] && curr > array[r];
		
		if (!isPeak) {
			continue;
		}
		
		while (i >= 0 && array[l + 1] > array[l]) {
			l--;
		}

		while (r < array.length && array[r - 1] > array[r]) {
			r++;
		}

		let currentPeak = (r - l) - 1;
		peak = Math.max(peak, currentPeak);	
	}
	
	return peak;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
