/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Space O(1) | Time O(k * n)
 * Where k is the number of list and n is the number of elements in each list.
 * Notes: We set the first list from lists as the root node and then iterate over the remaining items from the list. For each iteration we merge root with the current list.
 * Then we return root;
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }

  let root = lists[0];

  for (let i = 1; i < lists.length; i++) {
    root = merge(root, lists[i]);
  }

  return root || null;
};

function merge(l1, l2) {
  let root = new ListNode();
  let node = root;

  while (l1 || l2) {
    if (!l1) {
      node.next = l2;
      node = node.next;
      l2 = l2.next;
      continue;
    }

    if (!l2) {
      node.next = l1;
      node = node.next;
      l1 = l1.next;
      continue;
    }

    if (l1.val > l2.val) {
      node.next = l2;
      node = node.next;
      l2 = l2.next;
    } else {
      node.next = l1;
      node = node.next;
      l1 = l1.next;
    }
  }

  return root.next;
}
