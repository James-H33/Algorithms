/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * Space O(n) |  Time O(n log(n))
 * We create a map to count the frequency of each number. Sort by the frequency values. Then remove from k the frequency value
 * until k less than 0.
 */
 var findLeastNumOfUniqueInts = function(arr, k) {
    let map = {}
    
    for (let key of arr) {
        map[key] = (map[key] || 0) + 1; 
    }
  
    let frequencyArr = Object.values(map).sort((a,b) => a - b);
  
    for (let i= 0; i < frequencyArr.length; i++) {
        k = k - frequencyArr[i];
      
        if (k < 0) {
          return  frequencyArr.length - i;
        }
    }
  
    return 0;
};