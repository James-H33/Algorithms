// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
    * https://www.algoexpert.io/questions/Sum%20of%20Linked%20Lists
    * Space O(n)
    * Time O(n)
*/

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let carryOver = 0;
  let sumList = null;
  let sumListHead = null;

  while (linkedListOne || linkedListTwo || carryOver) {
    let listOneValue = linkedListOne ? linkedListOne.value : 0;
    let listTwoValue = linkedListTwo ? linkedListTwo.value : 0;

    let sum = listOneValue + listTwoValue + carryOver;
    carryOver = 0;

    if (sum >= 10) {
      sum = sum % 10;
      carryOver = 1;
    }

    let node = new LinkedList(sum);

    if (!sumListHead) {
      sumListHead = node;
      sumList = node;
    } else {
      sumList.next = node;
      sumList = node;
    }

    linkedListOne = linkedListOne ? linkedListOne.next : null;
    linkedListTwo = linkedListTwo ? linkedListTwo.next : null;
  }

  return sumListHead;
}
