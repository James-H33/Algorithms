/**
 * @param {character[][]} grid
 * @return {number}
 * Space O(n) where in is the grid size | Time O(n) where n is the grid size
 * Notes:
 * Time Complexity match: https://leetcode.com/problems/number-of-islands/discuss/151858/JavaScript-DFS
*/
 var numIslands = function(grid) {
    let islandCount = 0;
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '1') {
          findNeighbors(i, j);
          islandCount++;
        }
      }
    }
  
  return islandCount;
  
  function findNeighbors(x, y) {
    if (isInBounds(x, y) && grid[x][y] !== '0') {
      grid[x][y] = '0';
      
      findNeighbors(x - 1, y);
      findNeighbors(x + 1, y);
      findNeighbors(x, y - 1);
      findNeighbors(x, y + 1);
    }
  }
  
  function isInBounds(x, y) {
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
  }
};