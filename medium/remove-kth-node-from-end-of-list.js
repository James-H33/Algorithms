/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/
 * Space O(n)
 * Time O(n)
 */
var removeNthFromEnd = function (head, n) {
  let nodeArr = [];
  let node = head;

  while (node) {
    nodeArr.push(node);
    node = node.next;
  }

  let index = nodeArr.length - n;
  let prev = nodeArr[index - 1];
  let next = nodeArr[index + 1] || null;

  if (!prev) {
    return next;
  }

  prev.next = next;

  return head;
};
