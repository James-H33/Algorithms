/*
    Space O(nm)
    Time O(nm)
    Notes: Create a grid where first row and first column are filled with 1's. Iterate overt the remaining grid sections and set the 
    current grid index to the sun of the adjacent grid cells. 
*/

function numberOfWaysToTraverseGraph(width, height) {
  let grid = Array(height)
    .fill(0)
    .map(() => Array(width));

  for (let i = 0; i < width; i++) {
    grid[0][i] = 1;
  }

  for (let i = 0; i < height; i++) {
    grid[i][0] = 1;
  }

  for (let i = 1; i < height; i++) {
    for (let k = 1; k < width; k++) {
      grid[i][k] = grid[i - 1][k] + grid[i][k - 1];
    }
  }

  return grid[height - 1][width - 1];
}
