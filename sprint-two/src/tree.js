var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = new Tree(value);
  this.children.push(newNode);

};

treeMethods.contains = function(target) {
  var found = false;

  var _contains = function(node) {
    if (node.value === target) {
      found = true;
      return found;
    } else {
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          _contains(node.children[i]);
        }
        
      }     
    }
  };
  _contains(this);
  return found;

};

/*
 * Complexity: What is the time complexity of the above functions?
//addChild - constant time complexity - O(1)
//contains - linear time complexity - O(n)

 */
