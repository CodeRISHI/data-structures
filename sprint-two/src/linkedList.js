var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!this.tail) {
      this.tail = new Node(value);
      this.head = this.tail;

    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }

  };

  list.removeHead = function() {
    var temp = this.head.value;
    this.head = this.head.next;

    return temp;
  };

  list.contains = function(target) {
    //set a temp var to current head in list
    var current = this.head;
    var found = false;

    var _contains = function(node) {
      if (node.value === target) {
        found = true;
        return found;
      } else if (node.next) {
        _contains(node.next);
      }
    };

    _contains(current);
    return found;

  };


  return list;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
//addTail : constant time complexity O(1)
//removeHead : constant time complexity O(1)
// contains : linear time complexity O(n)


 */
