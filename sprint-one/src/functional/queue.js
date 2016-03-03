var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var items = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    for (var i = items; i > 0; i--) {
      storage[i] = storage[i - 1];
    }
    storage[0] = value;
    items++;
  };


  someInstance.dequeue = function() {
    if (items > 0) {
      var temp = storage[items - 1];
      
      delete storage[items - 1];
      items--;
      return temp;
    }
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
