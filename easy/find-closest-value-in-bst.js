/*

    * Initial Thoughts: 
        * Method: Recursion
        * At each node we will compare the target value and store it as the closest value and then move the the next node based
        * on whether the currents node value is greater than or less than; If current node value is equal to then we are done.

    * Space O(log(n)) | Time O(log(n))
    * Notes: At each node we compare the target value and store it as the closest value and then move the the next node based
     on whether the currents node value is greater than or less than; If current node value is equal to then we are done.
*/


function findClosestValueInBst(tree, target) {
    const treeInfo = { closest: Infinity };

    findClosest(tree, target, treeInfo);

    return treeInfo.closest;
}

function findClosest(node, target, treeInfo) {
    if (!node) {
        return;
    }

    if (node.value === target) {
        treeInfo.closest = target;
        return;
    }

    const prevClosest = Math.abs(treeInfo.closest - target);
    const currClosest = Math.abs(node.value - target);

    if (prevClosest > currClosest) {
        treeInfo.closest = node.value;
    }

    if (node.value > target) {
        findClosest(node.left, target, treeInfo);
    } else {
        findClosest(node.right, target, treeInfo);
    }
}