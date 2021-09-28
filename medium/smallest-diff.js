/*
 * Space O(1) - We take almost no additional space out side of the results array
 * Time O(n log(n)) - Due to the sorting we have a longer time complexity 
 * Notes: Sort both array and increment i and/or k to grab each value from arrayOne or arrayTwo.
*/
function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	
	let res = [1000, -1000];
	let i = 0;
	let k = 0;
	
	while (i < arrayOne.length && k < arrayTwo.length) {
		let num1 = arrayOne[i];
		let num2 = arrayTwo[k];
		
		if (num1 < num2) {
			i++;
		} else {
			k++
		}
		
		if (getDiff(num1, num2) < getDiff(res[0], res[1])) {
			res = [num1, num2];
		}
	}
	
	return res;
}

function getDiff(n1, n2) {
	return Math.abs(n1 - n2);
}
	