/**
    https://leetcode.com/problems/find-largest-value-in-each-tree-row/
    Space O(h) - h is the number of levels in the tree
    Time O(n) - n is the number of nodes visited.
    Notes: DFS, keep track of depth with a values array where depth is the position in the array and we store the highest value
    for each depth we reach.
 */
var largestValues = function (root) {
  const values = [];

  dfs(root, 0);

  return values;

  function dfs(node, depth) {
    if (!node) {
      return;
    }

    if (values[depth] !== undefined) {
      if (values[depth] < node.val) {
        values[depth] = node.val;
      }
    } else {
      values.push(node.val);
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
};
