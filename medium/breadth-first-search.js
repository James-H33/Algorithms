
/*
    Space O(n) - where n is the number of names in the array
    Time O(n) - where n is also the numer of names in the array
    Notes: Use a queue to collect each node and their children and keep poping off the first value of the queue and grabing that node name and children.
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
  
    breadthFirstSearch(array) {
          let q = [this];
          
          while (q.length > 0) {
              const { name, children } = q.shift();
              array.push(name);
              
              for (let c of children) {
                  q.push(c);	
              }
          }		
          
          return array;
    }
  }