/*
    https://www.algoexpert.io/questions/Find%20Successor
    Space O(h) - Where h is the Height of the Tree
    Time O(n) - Worst case is we have to go through every node
*/

function findSuccessor(tree, target) {
  let prev = { value: null };
  let successor = null;

  dfs(tree);

  return successor;

  function dfs(node) {
    if (!node || successor) {
      return;
    }

    if (node.left) {
      dfs(node.left);
    }

    if (prev.value === target.value && !successor) {
      successor = node;
      return;
    }

    prev = node;

    if (node.right) {
      dfs(node.right);
    }
  }
}

