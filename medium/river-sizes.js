/*
    https://www.algoexpert.io/questions/River%20Sizes
    Space O(h) - worst case is h where the height of the DFS stack is the entire matrix.
    Time O(nm)
    Notes: Iterate over grid and for each cell that is equal to 1 we do a DFS to find the neighboring cells. At each cell 
    that is a 1, we set it to 0 inorder to not recount that cell.
*/
function riverSizes(matrix) {
  let rivers = [];
  let width = matrix.length;
  let height = matrix[0].length;

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let cell = matrix[x][y];

      if (cell === 1) {
        rivers.push(getRiverLength(x, y).length);
      }
    }
  }

  return rivers;

  function getRiverLength(x, y, info = { length: 0 }) {
    if (!isInBounds(x, y)) {
      return;
    }

    if (isInBounds(x, y) && matrix[x][y] === 0) {
      return;
    }

    info.length++;
    matrix[x][y] = 0;

    getRiverLength(x - 1, y, info);
    getRiverLength(x + 1, y, info);
    getRiverLength(x, y - 1, info);
    getRiverLength(x, y + 1, info);

    return info;
  }

  function isInBounds(x, y) {
    return x >= 0 && x < width && y >= 0 && y < height;
  }
}
