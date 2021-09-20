/**
 * @param {number} numRows
 * @return {number[][]}
 * Space O(n) | Time O(n)
 * Create loop based on numRows, hard code first two rows logic, create inner while loop where we grab the prevRow and use it's values to calculate the
 * current rows values
 */
 var generate = function(numRows) {
    let result = [];
    
    for (let i = 0; i < numRows; i++) {
      if (i === 0) {
          result.push([1]);
        continue;
      }
      
      if (i === 1) {
          result.push([1, 1]);
        continue;
      }
      
      let k = 0;
      let row = [];
      
      while (k <= i) {
        if (k === 0) {
          row.push(1);
          k++;
          continue;
        }
        
        if (k === i) {
          row.push(1);
          k++;
          continue;
        }
        
        let prevRow = result[i - 1];
                
        row.push(prevRow[k - 1] + prevRow[k]);
        k++;
      }
      
      result.push(row);
    }
    
    return result;
  };