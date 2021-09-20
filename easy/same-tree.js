/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * Space O(h) | O(n)
 * Notes: DFS, Traverse both trees at the same time while making sure each branch has the same node and node val. If a level is reached where
 * one node does not match the other then we set isBalanced to false.
 */
 const isSameTree = function(p, q) {
    const data = { isBalanced: true };
    
    dfs(p, q, data);
    
    return data.isBalanced;
};

function dfs(node, mirrorNode, treeInfo) {
    if (!treeInfo.isBalanced) {
        return;
    }

    if (!node && !mirrorNode) {
        return;
    }
    
    if (!node && mirrorNode || node && !mirrorNode) {
      treeInfo.isBalanced = false;
      return;
    }
    
    if (node.val !== mirrorNode.val) {
        treeInfo.isBalanced = false;
    }
    
    if (!treeInfo.isBalanced) {
        return;
    }
    
    dfs(node.left, mirrorNode.left, treeInfo);
    dfs(node.right, mirrorNode.right, treeInfo);
}
