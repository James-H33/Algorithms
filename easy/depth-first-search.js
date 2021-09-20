/*
    Initial Thoughts: 
        - Iterate over each value of the array in the method depthFirstSearch, when we reach an element that has children we then call 
        child.depthFirstSearch to look through all of that items children and then return the results 
    Problem Type: Graph
    Space O(v + e) | Time O(v)
    v = vertices
    e = edges

*/

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
        array.push(this.name);
        
        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        
        return array;
    }
  }