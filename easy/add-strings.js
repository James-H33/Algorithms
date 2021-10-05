/*
    https://leetcode.com/problems/add-strings/submissions/
    Space O(n)
    Time O(n)
*/

var addStrings = function (num1, num2) {
  let n1 = "";
  let n2 = "";

  if (num1.length < num2.length) {
    n1 = num2;
    n2 = num1;
  } else {
    n1 = num1;
    n2 = num2;
  }

  let i = n1.length - 1;
  let k = n2.length - 1;
  let carryOver = 0;
  let sum = [];

  while (i >= 0) {
    let num1Char = parseInt(n1[i] || "0", 10);
    let num2Char = parseInt(n2[k] || "0", 10);

    let currentSum = num1Char + num2Char + carryOver;
    carryOver = 0;

    if (currentSum >= 10) {
      carryOver = 1;
      currentSum = currentSum % 10;
    }

    sum.unshift(currentSum);

    if (i - 1 < 0 && carryOver) {
      sum.unshift(carryOver);
    }

    i--;
    k--;
  }

  return sum.join("");
};
