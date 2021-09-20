/**
 * @param {number[][]} intervals
 * @return {number}
 * Space O(1) | Time O(n log(n))
 * Notes: We sort the intervals by using the second number which is the larger number and the interate of the intervals
 * checking each one to see if current first value is less than the previous last value. If current first is less than previous last
 * then we up removed counter and move on, otherwise we update previous.
 */
 var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let previous = intervals[0];
    let count = 0;
    
    for (let i = 1; i < intervals.length; i++) {
      let current = intervals[i];
      
      if (previous[1] > current[0]) {
          count++;
      } else {
        previous = current;
      }
    }
    
    return count;
  };