/*
    Space O(n)
    Time O(n)
    Notes: Create an open and closing bracket map in order to check each value against the maps. Loop through the values and stash each open bracket
    in a map and when we find a closing bracket we check the last value of the stack to see if it's match.
*/
function balancedBrackets(string) {
  let stack = [];
  let openMap = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  let closingMap = {
    "}": 1,
    "]": 1,
    ")": 1,
  };

  for (let i = 0; i < string.length; i++) {
    let bracket = string[i];

    if (bracket in openMap || bracket in closingMap) {
      if (bracket in openMap) {
        stack.push(bracket);
        continue;
      }

      if (openMap[stack[stack.length - 1]] === bracket) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
