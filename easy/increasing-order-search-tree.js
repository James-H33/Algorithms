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
 * @return {TreeNode}
 */

/*
    Space O(h) | Time O(n)
*/
 var increasingBST = function(root) {
    const head = { right: null };
    let prev = head;
  
    inOrderTraverse(root);
    
    return head.right;
    
    function inOrderTraverse(node) {
      if (!node) {
          return;
      }
  
      if (node.left) {
        inOrderTraverse(node.left);
      }
      
      prev.right = new TreeNode(node.val, null, null);
      prev = prev.right;
  
      if (node.right) {
        inOrderTraverse(node.right);
      }
    }
  };
  