/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 
 * https://leetcode.com/problems/spiral-matrix/
 * 
 * Space O(n * m)
 * Time O(n * m)
 */
var spiralOrder = function (matrix) {
  let output = [];

  let width = matrix[0].length;
  let height = matrix.length;
  let matrixSize = width * height;

  let left = 0;
  let right = width - 1;
  let top = 0;
  let bottom = height - 1;

  while (output.length < matrixSize) {
    traverse();
  }

  return output;

  function traverse() {
    for (let i = left; i <= right; i++) {
      output.push(matrix[top][i]);

      if (output.length === matrixSize) {
        return;
      }
    }

    top++;

    for (let i = top; i <= bottom; i++) {
      output.push(matrix[i][right]);

      if (output.length === matrixSize) {
        return;
      }
    }

    right--;

    for (let i = right; i >= left; i--) {
      output.push(matrix[bottom][i]);

      if (output.length === matrixSize) {
        return;
      }
    }

    bottom--;

    for (let i = bottom; i >= top; i--) {
      output.push(matrix[i][left]);

      if (output.length === matrixSize) {
        return;
      }
    }

    left++;
  }
};
