
/*
    Space O(n)
    Time O(n log(n))
    Notes: Sort the intervals using the first value of each interval. Loop though the intervals and keep track of prev Interval until a new one is found.
    Check prevInt last value with currInt first value and then grab the max of the between the two for the last value.
*/
function mergeOverlappingIntervals(array) {
	array.sort((a, b) => a[0] - b[0]);
	let results = [array[0]];
	let prevInt = array[0];
	
	for (let i = 1; i < array.length; i++) {
		let currInt = array[i];
		
		if (prevInt[1] >= currInt[0]) {
			prevInt[1] = Math.max(currInt[1], prevInt[1]);
		} else {
			results.push(currInt);
			prevInt = currInt;
		}
	}
	
  return results;
}
