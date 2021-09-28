/*
    Brute Force Solution:
    Space O(n)
    Time O(n)
*/
// function arrayOfProducts(array) {
// 	let productArray = Array(array.length).fill(1);
	
// 	for (let i = 0; i < array.length; i++) {
// 		let l = i - 1;
// 		let r = i + 1;
// 		let runningCalc = 1;
		
// 		while (l >= 0) {
// 			runningCalc *= array[l];
// 			l--;
// 		}
		
// 		while (r < array.length) {
// 			runningCalc *= array[r];
// 			r++;
// 		}
		
// 		productArray[i] = runningCalc;
// 	}
	
// 	return productArray;
// }

/*
    Optimized Solition
    Space O(n)
    Time O(n)
    Notes: 
*/

function arrayOfProducts(array) {
	let productArray = Array(array.length).fill(1);
	
	let leftProduct = 1;
	for (let i = array.length - 1; i >= 0; i--) {
		let num = array[i];
		productArray[i] *= leftProduct;
		leftProduct *= num;
	}
	
	let rightProduct = 1;
	for (let i = 0; i < array.length; i++) {
		let num = array[i];
		productArray[i] *= rightProduct;
		rightProduct *= num;
	}
	
	return productArray;
}

console.log(arrayOfProducts([5, 1, 4, 2]))