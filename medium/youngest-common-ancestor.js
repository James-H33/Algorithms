// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

/*
    * https://www.algoexpert.io/questions/Youngest%20Common%20Ancestor
    * Space O(h)
    * Time O(n)
    * Notes: Traverse the ancestor tree of d1 until you reach the root node of the tree, along the way mark e
    * each node as visited and then traverse the ancestor tree of d2 while looking at the visited property until one is set to true.
*/

function getYoungestCommonAncestor(top, d1, d2) {
  traverseUp(d1);
  let commonNode = traverseUp(d2);

  return commonNode;

  function traverseUp(node) {
    if (node.visited) {
      return node;
    }

    node.visited = true;

    if (node.name === top.name) {
      return node;
    }

    return traverseUp(node.ancestor);
  }
}
