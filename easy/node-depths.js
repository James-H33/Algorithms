/*
    Initial Thoughts: 
    - Method: Recursion
    - Iterate over every node from left to right and for each new depth level traversed, add that new depth to the depth total count.

    Space O(h) Where h is the height of the tree | Time O(n)
    Notes: Traverse every node and for each new depth level traversed, add that new depth to the depth total count.

*/

function nodeDepths(root) {
    const treeInfo = { depth: 0 };

    getDepth(root, 0, treeInfo);

    return treeInfo.depth;
}

function getDepth(node, depth, treeInfo) {
    if (!node) {
        return;
    }

    treeInfo.depth += depth;

    getDepth(node.left, depth + 1, treeInfo);
    getDepth(node.right, depth + 1, treeInfo);
}


