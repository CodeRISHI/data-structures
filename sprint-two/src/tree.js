var Tree = function(value) {
  var newTree = Object.create(Tree.prototype);
  newTree.value = value;
  newTree.children = [];

  return newTree;
};

Tree.prototype.addChild = function(value) {
  var newNode = new Tree(value);
  this.children.push(newNode);

};

Tree.prototype.contains = function(target) {
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
//addChild - Constant time complexity - O(1)
//contains - Linear time complexity - O(n)
 */
