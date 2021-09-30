
/*
    Space O(h) - Where h is the height of the tree
    Time O(n) - Where n is all the nodes of the tree
    Notes: DFS, each leaf node returns it's longest path value + 1, check if path lengths are a distance of more than 1. 
    Set isBalanced to false and short cut the DFS traversal.
*/
function heightBalancedBinaryTree(tree) {
  let isBalanced = true;

  dfs(tree);

  return isBalanced;

  function dfs(node) {
    if (!node || !isBalanced) {
      return 0;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    if (Math.abs(left - right) > 1) {
      isBalanced = false;
      return 0;
    }

    return Math.max(left, right) + 1;
  }
}
