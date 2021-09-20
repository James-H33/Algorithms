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
 * @param {number} targetSum
 * @return {boolean}
 * Space O(h) | Time O(n)
 * Use DFS to traverse the tree carrying over a sum for each leaf once a node has been reached that doesn't have a left or right branch then check the sum and set hasPath.
 */
 var hasPathSum = function(root, targetSum) {
    const treeInfo = { hasPath: false };
    
    traverse(root, 0);
    
    return treeInfo.hasPath;
    
    function traverse(node, sum) {
      if (!node) {
          return;
      }
  
      if (!node.left && !node.right) {
        sum += node.val;
  
        if (sum === targetSum) {
          treeInfo.hasPath = true;
          return;
        }
  
        return;
      }
  
      sum += node.val;
  
      traverse(node.left, sum);
      traverse(node.right, sum);
    }
  };