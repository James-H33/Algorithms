/*
    Initial Thoughts:
    - Method: Interation
    - Based on the boolean fastest, we will sort both arrays to be in ascending order. Then we will iterate and use Math.min or Math.max depending on the how fastest is set.
    We will use the result of the Math methods on each iteration and add that result to a totalTandemSpeed value.
    Space O(1) | Time O(n log(n))
   
*/

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => fastest ? b - a : a - b);
	
    let totalTandemSpeed = 0;

    for (let i = 0; i < redShirtSpeeds.length; i++) {
        totalTandemSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    }

    return totalTandemSpeed;
}

