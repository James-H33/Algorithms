/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 * Space O(n) | Time O(n) 
 * Notes: Traverse both trees at the same time and for each node set the new TreeNode left and right to another dfs traversal result.
 * If on a iteration where node1 or node2 does not exist just return the existing node that does exist.
 */
 var mergeTrees = function(root1, root2) {
    let newRoot = {};
  
    newRoot = dfs(root1, root2);
    
    return newRoot;
    
    function dfs(node1, node2) {
      if (!node1 && !node2) {
        return null;
      }
      
      if (!node1) {
        return node2;
      }
      
      if (!node2) {
        return node1;
      } 
      
      let node = new TreeNode();
      node.val = node1.val + node2.val;
      node.left = dfs(node1.left, node2.left);
      node.right = dfs(node1.right, node2.right);
      
      return node;
    }
  };