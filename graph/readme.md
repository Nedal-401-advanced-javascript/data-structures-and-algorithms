# Graphs
 a graph is an abstract data type that is meant to implement the undirected graph and directed graph concepts from the field of graph theory within mathematics.
## Challenge
 Implement your own Graph. The graph should be represented as an adjacency list, and should include methods

## Approach & Efficiency
It consumes O(n+e) space.
You can check if node i is adjacent to node j in O(n) (but it is also possible in O(1) depending on the implementation).
Getting all nodes adjacent to node i takes O(1) steps.
## API
- AddNode()
 Adds a new node to the graph
 Takes in the value of that node
 Returns the added node
- AddEdge()
 Adds a new edge between two nodes in the graph
 Include the ability to have a “weight”
 Takes in the two nodes to be connected by the edge
 Both nodes should already be in the Graph
- GetNodes()
 Returns all of the nodes in the graph as a collection (set, list, or similar)
- GetNeighbors()
 Returns a collection of edges connected to the given node
 Takes in a given node
 Include the weight of the connection in the returned collection
- Size()
 Returns the total number of nodes in the graph