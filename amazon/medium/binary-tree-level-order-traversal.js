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
 * @return {number[][]}
 */

/**
 * Method: Recursion
 * Notes: Recursively traverse in a inorder traversal fashion and for each depth we either start a new array in the already exists results array or 
 * push the new value of the current node. For each level the depth field will represent the array to add values too.
 * Space O(n) | Time O(n)
 *
*/
const levelOrder = function(root) {
    const results = [];

    getValuePerDepth(root, 0);

    return results;

    function getValuePerDepth(node, depth) {
        if (!node) {
            return;
        }

        if (Array.isArray(results[depth])) {
            results[depth].push(node.val);
        } else {
            results[depth] = [];
            results[depth].push(node.val);
        }

        getValuePerDepth(node.left, depth + 1);
        getValuePerDepth(node.right, depth + 1);
    }
};

/*
    Breath First Search Approach
*/

const levelOrder = function(root) {
    const results = [];
    let levelNodes = [];
    
    if (root) {
        levelNodes = [root];
    }
    
    while (levelNodes.length > 0) {
      let current = [];
      let length = levelNodes.length;
      
      for (let i = 0; i < length; i++) {
        let node = levelNodes.shift();
        
        current.push(node.val);
        
        if (node.left) {
            levelNodes.push(node.left);
        }
        
        if (node.right) {
            levelNodes.push(node.right);
        }
      }
      
      results.push(current);
    }
    
    return results;
  };