/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * Notes: Iterate over the board until we find the first character of the word we are trying to match. Then break starting position off into
 * helper function that will look up right left or down depending on the bounds of the board. If we look right and we find the next value then we
 * call the help function again look for the next value and so on.
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && search(i, j, 0)) {
        return true;
      }
    }
  }

  return false;

  function search(x, y, charIndex) {
    if (charIndex === word.length) {
      return true;
    }

    if (
      isInBounds(x, y) ||
      board[x][y] === " " ||
      board[x][y] !== word[charIndex]
    ) {
      return false;
    }

    let temp = board[x][y];
    board[x][y] = " ";
    charIndex++;

    let found =
      search(x - 1, y, charIndex) ||
      search(x + 1, y, charIndex) ||
      search(x, y - 1, charIndex) ||
      search(x, y + 1, charIndex);

    board[x][y] = temp;

    return found;
  }

  function isInBounds(x, y) {
    return x < 0 || x >= board.length || y < 0 || y >= board[0].length;
  }
};

[
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
"ABCCED"[(["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"])];
("SEE");
