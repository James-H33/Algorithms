/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * Space O(m * n) | Time O(m * n)
 * Notes: First we check the base case of whether or not the start position has an obstacle. If so, then return 0 paths. If not then we create a temp grid,
 * that we populate the first col and first row with 1's as long as there are no obstacles in the row/col. We populate the first col and row with 1
 * as there is only 1 path to get to these grid points, you can could either go directly to the right or down. If there are obstacles in the first col/row then
 * we must not populate all grid points after that obstacle as reachable positions. After that, the problem just becomes adding up the upper and left grid points of 
 * every grid point until the last grid point is reached.
 */
 var uniquePathsWithObstacles = function(grid) {
    if (grid[0][0] === 1) {
        return 0;
    }
    
    let tempGrid = Array(grid.length).fill(0).map(x => Array(grid[0].length).fill(0));
    
    let hasObstacle = false;
    
    for (let i = 0; i < grid.length; i++) {
      if (hasObstacle || isObstacle(i, 0)) {
          hasObstacle = true;
          continue;
      }
      
      tempGrid[i][0] = 1;
    }
    
    hasObstacle = false;
    
    for (let i = 0; i < grid[0].length; i++) {
      if (hasObstacle || isObstacle(0, i)) {
          hasObstacle = true;
          continue;
      }
      
      tempGrid[0][i] = 1;
    }
    
   for (let i = 1; i < grid.length; i++) {
      for (let j = 1; j < grid[0].length; j++) {
        if (isObstacle(i, j)) {
          continue;
        }
        
        tempGrid[i][j] = tempGrid[i - 1][j] + tempGrid[i][j - 1];
      }
    }
    
    return tempGrid[grid.length - 1][grid[0].length - 1];  
    
    function isObstacle(x, y) {
      return grid[x][y] === 1;   
    }
  }