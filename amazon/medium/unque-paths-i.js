/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * Space O(m * n) | Time O(m * n)
 */
var uniquePaths = function (m, n) {
  let tempGrid = Array(m)
    .fill(0)
    .map((x) => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    tempGrid[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    tempGrid[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      tempGrid[i][j] = tempGrid[i - 1][j] + tempGrid[i][j - 1];
    }
  }

  return tempGrid[tempGrid.length - 1][tempGrid[0].length - 1];
};
