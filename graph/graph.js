class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    // adjacency list (3rd method) : quick search, space effecient.
    /*
        vertex with neighbours 
        0 => [2]
        2 => [3,4]
        5 => []
        */
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
      // Adds a new node to the graph
      // Takes in the value of that node
      // Returns the added node
      // The correct usage for storing data in the Map is through the set(key, value) method.
    this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    // Adds a new edge between two nodes in the graph
    // Include the ability to have a “weight”
    // Takes in the two nodes to be connected by the edge
    // Both nodes should already be in the Graph
    if (
      !this._adjacencyList.has(startVertex) ||
      !this._adjacencyList.has(endVertex)
    ) {
      console.log("Vertex not found !!!");
    } else {
      // to cover the undirected
      //1->2
      //2->1
      // get neighbours
      const adjacencies = this._adjacencyList.get(startVertex);
      // add vertex and weight
      adjacencies.push(new Edge(endVertex, weight));
    }
  }

  getNeighbours(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      console.log("vertex does not exist");
    } else {
      return this._adjacencyList.get(vertex);
    }
  }

  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log("V ====> ", vertex);
      console.log("E ====> ", edge);
    }
  }
  Size(){
    //   Returns the total number of nodes in the graph
    return this._adjacencyList.size
  }
  bfs(startNode) {
    const queue = [];
    const vistedNodes = new Set();
    queue.push(startNode);
    vistedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (vistedNodes.has(neighborNode)) {
          continue;
        } else {
          vistedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }

    }

    return vistedNodes;
  }
  }

  dfs() {}

  pathTo() {}
}

const graph = new Graph();

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);

graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);
graph.addVertex(ten);

graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, eight);
graph.addDirectedEdge(eight, seven);

graph.printAll();
