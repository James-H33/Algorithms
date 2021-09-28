/*
    Space O(n)
    Time O(n)
*/
function minHeightBst(array) {
  let head = null;

  buildTree(0, array.length - 1);

  return head;

  function buildTree(startIdx, endIdx) {
    if (endIdx < startIdx) {
      return;
    }

    let midPointIndex = Math.floor((startIdx + endIdx) / 2);

    if (!head) {
      head = new BST(array[midPointIndex]);
    } else {
      head.insert(array[midPointIndex]);
    }

    buildTree(startIdx, midPointIndex - 1);
    buildTree(midPointIndex + 1, endIdx);
  }
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
