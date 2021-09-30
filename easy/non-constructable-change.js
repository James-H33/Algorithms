
/*
    https://www.algoexpert.io/questions/Non-Constructible%20Change
    Space O(1)
    Time O(n log(n))
    Notes: Iterate through each coin and keep track of current change, where current change is the sum of the previous coins.
    If on an iteration we currentChange + 1 less than the current coin than the currentChange + 1 can't be made.
*/
function nonConstructibleChange(coins) {
	coins.sort((a, b) => a - b);
	
	let currentChange = 0;
	
	for (const coin of coins) {
		if (coin > currentChange + 1) {
			return currentChange + 1;
		}
		
		currentChange += coin;
	}
		
	return currentChange + 1;
}
