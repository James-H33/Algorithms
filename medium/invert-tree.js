/*
    Space O(h)
    Time O(n)
    Notes: DFS, for each node swap the left and right child nodes and then call invert on the newly set left and right child nodes.

*/
function invertBinaryTree(tree) {
	invert(tree);
	
	return tree;
	
	function invert(node) {
		if (!node) {
			return;
		}
		
		let left = node.left;
		let right = node.right;
		
		node.left = right;
		node.right = left;
		
		invert(node.left);
		invert(node.right);
	}
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
