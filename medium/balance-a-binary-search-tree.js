/**
 * https://leetcode.com/problems/balance-a-binary-search-tree/
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
var balanceBST = function (root) {
  let values = [];

  inorder(root);

  return buildTree(0, values.length);

  function buildTree(left, right) {
    if (left > right) {
      return null;
    }

    let i = Math.floor((left + right) / 2);
    let val = values[i];
    let node = new TreeNode(val);

    node.left = buildTree(left, i - 1);
    node.right = buildTree(i + 1, right);

    return node;
  }

  function inorder(node) {
    if (!node) {
      return;
    }

    if (node.left) {
      inorder(node.left);
    }

    values.push(node.val);

    if (node.right) {
      inorder(node.right);
    }
  }
};
