/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * https://leetcode.com/problems/binary-tree-right-side-view/
 * Space O(h) - h is the height of the tree.
 * Time O(n)
 * Notes: DFS, Inverse Preorder traveral, Use a depth value and an output array.
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
    let output = [];
    
    dfs(root, 0);
    
    return output;
    
    function dfs(node, depth) {
      if (!node) {
        return;
      }
      
      if (output[depth] === undefined) {
        output.push(node.val);
      } 
      
      dfs(node.right, depth + 1);
      dfs(node.left, depth + 1);
    }
  };