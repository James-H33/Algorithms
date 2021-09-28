/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 /*
    Space O(n) 
    Time O(n)
    Notes: DFS where each depth level is a key in the hash map, which that key is the running sum for that depth. Keep track of the
    max depth level and return that sum.
 */
 var deepestLeavesSum = function(root) {
    let maxDepth = 0;
    let depthSums = { 0: 0 };
    
    dfs(root, 1);
    
    return depthSums[maxDepth];
    
    function dfs(node, depth) {
      if (!node) {
        return;
      }
      
      if (depth in depthSums) {
          depthSums[depth] += node.val;
      } else {
        maxDepth = depth;
        depthSums[depth] = node.val;
      }
      
      dfs(node.left, depth + 1);
      dfs(node.right, depth + 1);
    }
  };