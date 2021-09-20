/* 
  Solutions #1
  Questions: Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.

 * Space O(1) | Time Linear O(n)
 * Notes: We use a for-of loop, a single pointer and while loop to iterate through the sequence and the array. For each sequence 
 * value we iterate through, we use the pointer as a starting point for the array values in the while loop until we reach a value from the array that matches that
 * sequence value. If a match is found, we update the match count and continue this process until all values have been checked. In the end, we compare the
 * the match count and the sequence array length.

*/
function isValidSubsequence(array, sequence) {
	let pointerIndex = 0;
	let matchCount = 0;
	
	for (const sequenceVal of sequence) {
		while (pointerIndex < array.length) {
			let arrayVal = array[pointerIndex];
			
			if (sequenceVal === arrayVal) {
				matchCount++;
				pointerIndex++;
				break;
			}
			
			pointerIndex++;
		}
	}
	
	return matchCount === sequence.length;
}

/* 
  Solutions #2
  Questions: Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.

 * Space O(1) | Time Linear O(n)
 * Notes: We use a for-of loop to iterate over the array values and a sequence count to keep track of each match and position we are at in the sequence array. For each match we find as 
 * we iterate over the array we up sequence count by 1. In the end we just check to see if sequence count is equal to sequence length.

*/
function isValidSubsequence(array, sequence) {
    let seqCount = 0;

	for (const arrayVal of array) {
        if (arrayVal === sequence[seqCount]) {
            seqCount++;
        }
    }

    return seqCount === sequence.length;
}