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
 * @return {number[]}
 * Space O(n) | O(n)
 */
 var postorderTraversal = function(root) {
    let results = [];
    
    dfs(root);
  
    return results;
  
    function dfs(node) {
      if (!node) {
          return;
      }
      
      dfs(node.left);
      dfs(node.right);
      
      results.push(node.val);
    }
};