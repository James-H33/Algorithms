/*
    Space O(n) - Because we store the values in a new array
    Time O(n) - We pass through every value once.
*/
function inOrderTraverse(tree, array) {
	if (!tree) {
		return;
	}
	
	if (tree.left) {
		inOrderTraverse(tree.left, array);
	}
	
	array.push(tree.value);
	
	if (tree.right) {
		inOrderTraverse(tree.right, array);
	}
	
	return array;
}


/*
    Space O(n) - Because we store the values in a new array
    Time O(n) - We pass through every value once.
*/
function preOrderTraverse(tree, array) {
	if (!tree) {
		return;
	}
	
	array.push(tree.value);

	if (tree.left) {
		preOrderTraverse(tree.left, array);
	}
		
	if (tree.right) {
		preOrderTraverse(tree.right, array);
	}
	
	return array;
}

/*
    Space O(n) - Because we store the values in a new array
    Time O(n) - We pass through every value once.
*/
function postOrderTraverse(tree, array) {
	if (!tree) {
		return;
	}
	
	if (tree.left) {
		postOrderTraverse(tree.left, array);
	}
		
	if (tree.right) {
		postOrderTraverse(tree.right, array);
	}
	
	array.push(tree.value);
	
	return array;
}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
