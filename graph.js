class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(node) { this.nodes.add(node) }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(peopleList) {
    for (let node of peopleList) {
      this.addVertex(node)
    }
  }


  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(person1, person2) {
    person1.adjacent.add(person2);
    person2.adjacent.add(person1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(person1, person2) {
    person1.adjacent.remove(person2);
    person2.adjacent.remove(person1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(node) {
    this.nodes.delete(node);
  }


  // this function returns an array of Node values using DFS
  depthFirstSearch(person1, person2) {
    let toVisitStack = [person1];
    let seen = new Set(toVisitStack);
    while (toVisitStack.length) { //while there is something in there
      let currPerson = toVisitStack.pop();
      if (currPerson === person2) return true;
      for (let neighbor of currPerson.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitStack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return false;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(person1, person2) {
    let toVisitQueue = [person1];
    let seen = new Set(toVisitQueue);
    while (toVisitQueue.length) { //while there is something in there
      let currPerson = toVisitQueue.shift();
      if (currPerson === person2) return true;
      for (let neighbor of currPerson.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitQueue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return false;
  }

}
module.exports = { Graph, Node }