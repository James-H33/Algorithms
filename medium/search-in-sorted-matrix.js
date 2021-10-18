/*
 * Optimal Solution
 * https://www.algoexpert.io/questions/Search%20In%20Sorted%20Matrix
 * Space O(1)
 * Time O(n + m)
 */
function searchInSortedMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return [row, col];
    }
  }

  return [-1, -1];
}

/*
 * Not Opitimal | First Pass solution
 * https://www.algoexpert.io/questions/Search%20In%20Sorted%20Matrix
 * Space O(1)
 * Time O(n * m) | Worst case
 */
function searchInSortedMatrix(matrix, target) {
  let width = matrix[0].length;
  let height = matrix.length;

  let y = 0;
  let x = 0;

  while (y < height) {
    while (x < width) {
      let point = matrix[y][x];

      if (x === 0 && point > target) {
        return [-1, -1];
      }

      if (point === target) {
        return [y, x];
      } else if (point < target) {
        x++;
      } else {
        y++;
        x = 0;
      }
    }

    y++;
    x = 0;
  }

  return [-1, -1];
}
