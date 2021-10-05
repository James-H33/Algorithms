/*
    https://www.algoexpert.io/questions/Minimum%20Passes%20Of%20Matrix
    Space O(n*m)
    Time O(n * m * iterations)
    Notes: 
    - Iterate through grid with double for-loop. 
    - Hash map of covereted cells.
    - NegativeCount to check if all cells have been changed to positive values.  
    - IsInBound Helper functions
*/
function minimumPassesOfMatrix(matrix) {
  let width = matrix.length;
  let height = matrix[0].length;
  let negativeCount = 0;
  let storedCount = 0;
  let currentMap = {};
  let iterations = 0;

  for (let i = 0; i < width; i++) {
    for (let k = 0; k < height; k++) {
      if (matrix[i][k] < 0 && hasNeighboringConverterCell(i, k)) {
        matrix[i][k] = Math.abs(matrix[i][k]);
        storeInMap(i, k);
        storedCount++;
      } else if (matrix[i][k] < 0) {
        negativeCount++;
      }
    }

    if (i === width - 1 && storedCount > 0) {
      if (negativeCount === 0) {
        iterations++;
        break;
      }

      i = -1;
      currentMap = {};
      storedCount = 0;
      negativeCount = 0;
      iterations++;
    }
  }

  return negativeCount > 0 ? -1 : iterations;

  function hasNeighboringConverterCell(x, y, isFirstDepth = false) {
    if (!isInBounds(x, y)) {
      return false;
    }

    if (matrix[x][y] > 0 && isConverterCell(x, y)) {
      return true;
    }

    if (isFirstDepth) {
      return false;
    }

    let left = hasNeighboringConverterCell(x - 1, y, true);
    let right = hasNeighboringConverterCell(x + 1, y, true);
    let up = hasNeighboringConverterCell(x, y - 1, true);
    let down = hasNeighboringConverterCell(x, y + 1, true);

    return left || right || up || down;
  }

  function isInBounds(x, y) {
    return x >= 0 && x < width && y >= 0 && y < height;
  }

  function storeInMap(x, y) {
    let key = getCellKey(x, y);
    currentMap[key] = true;
  }

  function isConverterCell(x, y) {
    let key = getCellKey(x, y);
    return !(key in currentMap);
  }

  function getCellKey(x, y) {
    return `${x}${y}`;
  }
}
