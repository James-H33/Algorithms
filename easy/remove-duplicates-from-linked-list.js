/*
    Method: Iteration
    Notes: Iterate through the linked list and keep track of the prev linked list item. If prevItem value 
    is the same as the currentItem value then set prevItem.next to currentItem.next and then set currentItem = currentItem.next. In the end,
    we will return head.
    Space O(1) | Time O(n)
*/

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
function removeDuplicatesFromLinkedList(linkedList) {
    let prevItem = { value: -1 };
    let currentItem = linkedList;

    while (currentItem) {
    if (prevItem.value === currentItem.value) {
        prevItem.next = currentItem.next;
    } else {
        prevItem = currentItem;
    }

    currentItem = currentItem.next;
    }

    return linkedList;
}