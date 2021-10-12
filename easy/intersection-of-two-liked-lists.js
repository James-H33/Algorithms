/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 * Space O(1)
 * Time O(n)
 * Notes: Simple while loop to traverse the linked lists. Set new property on each node called visited and check if that node comes up again 
 * the traversal.
 */
 var getIntersectionNode = function(headA, headB) {
    while (headA || headB) {
      if (headA) {
        if (headA.visited) {
          return headA
        } else {
          headA.visited = true;
        }
      }
      
      if (headB) {
        if (headB.visited) {
            return headB;
        } else {
          headB.visited = true;
        }
      }
      
      headA = headA ? headA.next : null;
      headB = headB ? headB.next : null;
    }
    
    return null;
  };