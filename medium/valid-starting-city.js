/*
    https://www.algoexpert.io/questions/Valid%20Starting%20City
    Space O(1)
    Time O(n^2)
    Notes: Brute Force, two loops where we try every possibility. We do a trick using modulos operator to cicle the array more than once.
*/
function validStartingCity(distances, fuel, mpg) {
	let length = distances.length;
	let currentFuel = 0;
	let startPosition = -1;
	
	for (let i = 0; i < length; i++) {
		currentFuel = 0;
		
		for (let k = i; k < length + i; k++) {
			let kIdx = k % length;
			let distance = distances[kIdx];
			let gas = fuel[kIdx];
			currentFuel += gas * mpg;
			currentFuel -= distance;
			
			if (currentFuel < 0) {
				break;
			}
			
			if (((length + i) - 1) - k === i) {
				startPosition = i;
				return startPosition;
			}
		}
	}
	
  return startPosition;
}
