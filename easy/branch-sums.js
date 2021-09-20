/*
    Initial Thoughts:
    - Method: Recursion
    - We will use recusion to traverse through each node of the tree and at each node we will at that nodes value to the running sum. When
    we reach a node that has no left and no right branches then we will push the current sum to the results array.
    * Space O(n) | Time O(n)
*/

function branchSums(root) {
    const sums = [];

    getBranchSum(root, 0, sums);

    return sums;
}

function getBranchSum(node, runningSum, sums) {
		runningSum += node.value;

    if (!node.left && !node.right) {
        sums.push(runningSum);
        return;
    }
	
    if (node.left) {
        getBranchSum(node.left, runningSum, sums);
    }

    if (node.right) {
        getBranchSum(node.right, runningSum, sums);
    }
}