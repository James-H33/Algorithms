/**
 * @param {number} n
 * @return {number[][]}
 * 
 * https://leetcode.com/problems/spiral-matrix-ii/submissions/
 * Space O(n * m)
 * Time O(n * m)
 */
var generateMatrix = function (n) {
  let matrixSize = n * n;
  let matrix = Array(n)
    .fill(0)
    .map((x) => Array(n).fill(0));

  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let num = 1;

  while (num <= matrixSize) {
    traverse();
  }

  return matrix;

  function traverse() {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num;
      num++;

      if (num > matrixSize) {
        break;
      }
    }

    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num;
      num++;
      if (num > matrixSize) {
        break;
      }
    }

    right--;

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num;
      num++;
      if (num > matrixSize) {
        break;
      }
    }

    bottom--;

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num;
      num++;
      if (num > matrixSize) {
        break;
      }
    }

    left++;
  }
};
