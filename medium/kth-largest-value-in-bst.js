class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/*
    Space O(n)
    Time O(n)
    Notes: We do an inorder traversal and collect all the values and then just return the kth value of the array.
*/
function findKthLargestValueInBst(tree, k) {
  let results = [];

  dfs(tree);

  return results[results.length - k];

  function dfs(node) {
    if (!node) {
      return;
    }

    if (node.left) {
      dfs(node.left);
    }

    results.push(node.value);

    if (node.right) {
      dfs(node.right);
    }
  }
}
