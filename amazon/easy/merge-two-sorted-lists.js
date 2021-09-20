/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Notes: 
 * 
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Notes: 
 */
 var mergeTwoLists = function(l1, l2) {
    let root = new ListNode();
    let node = root;
    
    while (l1 || l2) {
       if (!l1) {
          node.next = new ListNode(l2.val);
          node = node.next;
          l2 = l2.next;
          continue;
       }
      
       if (!l2) {
          node.next = new ListNode(l1.val);
          node = node.next;
          l1 = l1.next;
          continue;
       }
          
      if (l1.val > l2.val) {
        node.next = new ListNode(l2.val);
        node = node.next;
        l2 = l2.next;
      } else {
        node.next = new ListNode(l1.val);
        node = node.next;
        l1 = l1.next;
      }
    }
    
    return root.next;
  };
  
  
  