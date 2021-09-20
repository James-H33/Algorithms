/*
  Method: Recursion
  Notes: If n is 2 or less we will return 1 right away. If greater than 2 then we will call getNthFib with n - 1 plus 
  getNthFib with n - 2 as the respective inputs.
  Space O(n) | Time O(n)
*/
/*
  Space O(n) | Time O(2^n)
*/
function getNthFib(n, memo = {}) {
	if (n === 2) {
		return 1;
	}
	
	if (n === 1) {
		return 0;
	}
	
	return  getNthFib(n - 1) + getNthFib(n - 2);
}


/*
  Space O(n) | Time O(n)
*/
function getNthFib(n, memo = {}) {
	if (n === 2) {
		return 1;
	}
	
	if (n === 1) {
		return 0;
	}
	
	let result = getNthFib(n - 1) + getNthFib(n - 2);
	
	memo[n] = result;
	return memo[n];
}

