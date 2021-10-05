/*
    https://www.algoexpert.io/questions/Remove%20Islands
    Space O(n * m)
    Time O(n * m)
    Notes: Iterate the over the perimeter and do a DFS on all 1's that touch the border then store each item in a hash map.
    Once that is complete iterate the inner rows and columns and set each cell to a 0 where a 1 is that is also not connected to a 1 who's neighbors
    touch the border.
*/
function removeIslands(matrix) {
	const width = matrix.length;
	const height = matrix[0].length;
	let map = {};
	
	for (let i = 0; i < width; i++) {
		if (matrix[i][0] === 1) {
			dfs(i, 0);
		}
		
		if (matrix[i][height - 1] === 1) {
			dfs(i, height - 1);
		}
	}
	
	for (let i = 0; i < height; i++) {
		if (matrix[0][i] === 1) {
			dfs(0, i);
		}
		
		if (matrix[width - 1][i] === 1) {
			dfs(width - 1, i);
		}
	}
	
	for (let i = 0; i < height; i++) {
		if (matrix[width - 1][i] === 1) {
			dfs(width - 1, i);
		}
	}
	
	for (let i = 1; i < width - 1; i++) {
		for (let k = 1; k < height - 1; k++) {
			if (matrix[i][k] === 1 && !isInMap(i, k)) {
				matrix[i][k] = 0;
			}	
		}
	}
	
	return matrix;
	
	function isInBounds(x, y) {
		return x >= 0 && x < width && y >= 0 && y < height;
	}
	
	function isInMap(x, y) {
		let cellKey = `${x}-${y}`;

		return cellKey in map;
	}
	
	function dfs(x, y) {
		if (!isInBounds(x, y)) {
			return;
		}
		
		if (matrix[x][y] === 0 || isInMap(x, y)) {
			return;
		}
		
		storeCellInMap(x, y);
		
		dfs(x - 1, y);
		dfs(x + 1, y);
		dfs(x, y - 1);
		dfs(x, y + 1);
	}
	
	function storeCellInMap(x, y) {
		let cellKey = `${x}-${y}`;
		map[cellKey] = true; 
	}
}
