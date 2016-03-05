

// ------------------------
// Instantiate a new graph
var Graph = function(value) {
  this.value = value;
  this.graphNodes = [];
  this.edges = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graphNodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var found = false;
  for (var i = 0; i < this.graphNodes.length; i++) {
    if (this.graphNodes[i] === node) {
      found = true;
      return found;
    }
  }
  return found;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.graphNodes.length; i++) {
    if (this.graphNodes[i] === node) {
      delete this.graphNodes[i];
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var found = false;
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode) {
      found = true;
      return found;
    } else if (this.edges[i][1] === fromNode && this.edges[i][0] === toNode) {
      found = true;
      return found;
    }
  }
  return found;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // debugger;
  var edge = [fromNode, toNode];
  this.edges.push(edge);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // debugger;
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode) {
      this.edges.splice(i, 1);
    } else if (this.edges[i][1] === fromNode && this.edges[i][0] === toNode) {
      this.edges.splice(i, 1);
    }
  }
  return this.edges;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.graphNodes.length; i++) {
    cb(this.graphNodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


