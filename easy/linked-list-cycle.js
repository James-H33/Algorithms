/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * https://leetcode.com/problems/linked-list-cycle/
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }

  if (head.visited) {
    return true;
  }

  head.visited = true;

  return hasCycle(head.next);
};
