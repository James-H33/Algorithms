/**
 * Given a string s which represents an expression, evaluate this expression and return its value. 

    The integer division should truncate toward zero.

    You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

    Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

    Example: 1
    Input: s = "3+2*2"
    Output: 7

    Example: 2
    Input: s = " 3/2 "
    Output: 1

    Example: 3
    Input: s = " 3+5 / 2 "
    Output: 5

    Space O(n) | Time O(n)
    My Notes: We first interate over all the values being sure to keep track of the currentChar, currentNumber and the current operator. We then add 
    items to the stack when a full expression is evaluated. We must be sure to do the final eval on the last interation hence the s.length - 1 check.
    This way we can evaulate the last expression. The we pop items of the stack and add up each result to be returned.
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [];
  let operator = "+";
  let currentNumber = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);

    if (isNumber(char)) {
      currentNumber = currentNumber * 10 + parseInt(char);
    }

    if ((!isNumber(char) && char !== " ") || s.length - 1 === i) {
      if (operator === "+") {
        stack.push(currentNumber);
      }

      if (operator === "-") {
        stack.push(-currentNumber);
      }

      if (operator === "*") {
        let res = stack.pop() * currentNumber;
        stack.push(Math.trunc(res));
      }

      if (operator === "/") {
        let res = stack.pop() / currentNumber;
        stack.push(Math.trunc(res));
      }

      operator = char;
      currentNumber = 0;
    }
  }

  let result = 0;

  while (stack.length) {
    result += stack.pop();
  }

  return result;
};

function isNumber(n) {
  let num = parseInt(n);
  return !Number.isNaN(num) && typeof num === "number";
}

/*
 More test cases
"3+2*2/2"
"3+5 / 2"
" 3/2 + 5 * 2"
" 3/2 + 5 * 2 - 3"
"40 / 2"
"14/3*2"
"14-3/2"
*/
