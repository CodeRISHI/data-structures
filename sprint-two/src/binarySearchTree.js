var BinarySearchTree = function(value) {
  var newBST = Object.create(bstMethods);

  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  return newBST;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var newNode = new BinarySearchTree(value);
  
  var _insert = function(node) {
    // debugger;
    if (node.value > value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        _insert(node.left);
      }
    } else if (node.value < value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        _insert(node.right);
      }
    }
  };
  _insert(this);  
};

bstMethods.contains = function(target) {
  var found = false;

  var _contains = function(node) {
    if (node.value === target) {
      found = true;
      return found;
    } 
    if (node.left !== null && node.left.value === target) {
      found = true;
      return found;
    } else if (node.left !== null && node.left.value !== target) {    
      _contains(node.left);
    } 

    if (node.right !== null && node.right.value === target) {
      found = true;
      return found;
    } else if (node.right !== null && node.right.value !== target) {
      _contains(node.right);
    }
  };

  _contains(this);
  return found;
};



bstMethods.depthFirstLog = function(func) {

  var _depthFirstLog = function(node) {
    if (node !== null) {
      func(node.value);
    }

    if (node.left !== null) {
      return _depthFirstLog(node.left);
    } else if (node.right !== null) {
      return _depthFirstLog(node.right);
    } else {
      return;
    }
  };

  _depthFirstLog(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 //insert - Logarithmic Time Complexity - O(log n)
 //contains - Logarithmic Time Complexity - O(log n)
 //depthFirstLog - Logarithmic Time Complexity - O(log n)
 */
