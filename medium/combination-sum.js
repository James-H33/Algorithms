/**
 * https://leetcode.com/problems/combination-sum/submissions/
 * Explantion: https://www.youtube.com/watch?v=GBKI9VSKdGg
 * DP problem - Backtracking solution
 * Space O(2^t) - t is the target value
 * Time O(2^t)
 */
 var combinationSum = function(candidates, target) {
    let results = [];
    
    dfs(0, [], 0);
    
    return results;
    
    function dfs(i, combo, total) {
      if (total === target) {
        results.push(combo);
        return; 
      }
      
      if (total > target || i >= candidates.length) {
        return;
      }
      
      let comboClone = combo.slice();
      combo.push(candidates[i]);
      
      dfs(i, combo, total + candidates[i]);
      dfs(i + 1, comboClone, total);
    }
  };
  
  
  