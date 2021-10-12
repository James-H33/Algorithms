/*
    * https://www.algoexpert.io/questions/Cycle%20In%20Graph
    * Space O(v + e)
    * Time O(v + e)
*/
function cycleInGraph(edges) {
  let visited = Array(edges.length).fill(0);
  let stack = Array(edges.length).fill(0);

  for (let i = 0; i < edges.length; i++) {
    if (hasCycle(i)) {
      return true;
    }
  }

  return false;

  function hasCycle(index) {
    if (stack[index] === 1) {
      return true;
    }

    if (visited[index] === 1) {
      return false;
    }

    visited[index] = 1;
    stack[index] = 1;

    for (let i = 0; i < edges[index].length; i++) {
      let edge = edges[index][i];

      if (hasCycle(edge)) {
        return true;
      }
    }

    stack[index] = 0;

    return false;
  }
}
