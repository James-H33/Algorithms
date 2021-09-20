/*
    * Find three largest numbers
    * Return Array<Number>[]
    * Space O(1) | Time O(n log(n))
*/

function findThreeLargestNumbers(array) {
	let result = [];
	result[0] = array[0];
	result[1] = array[1];
	result[2] = array[2];
	
	for (let i = 3; i < array.length; i++) {
		let current = array[i];
		
		for (let j = 0; j < result.length; j++) {
			if (current > result[j]) {
				let temp = result[j];
				result[j] = current;
				current = temp;
			}
		}
	}
	
	return result.sort((a, b) => a - b);
}

/*
 * Better Solution
 * Space O(1) | Time O(n)
*/
function findThreeLargestNumbers(array) {
	let results = Array(3).fill(null);
	
	for (let num of array) {
		updateLargest(results, num);
	}	

    return results;
	
	function updateLargest(arr, num) {
		if (arr[2] === null || arr[2] < num) {
			shift(arr, num, 2);
		} else if (arr[1] === null || arr[1] < num) {
            shift(arr, num, 1);
        } else if (arr[0] === null || arr[0] < num) {
			shift(arr, num, 0);
        }
	}

    function shift(arr, num, idx) {
        for (let i = 0; i < idx; i++) {
            if (idx === i) {
                arr[i] = num;
            } else {
                arr[i] = arr[i + 1];
            }
        }
    }
}

