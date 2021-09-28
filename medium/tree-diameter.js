// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
    Space O(h)
    Time O(n)
    Notes: DFS where at each leaf node we calculate the longest path at that node and then pass up the longest path value + 1 at that node.
*/

function binaryTreeDiameter(tree) {
  let longestPath = 0;

  dfs(tree);

  return longestPath;

  function dfs(node) {
    if (!node) {
      return 0;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);
    let currentPathLengthTotal = left + right;
    let longestPathAtJunction = Math.max(left, right);

    if (longestPath < currentPathLengthTotal) {
      longestPath = currentPathLengthTotal;
    }

    return longestPathAtJunction + 1;
  }
}
