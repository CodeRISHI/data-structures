var Stack = function(value) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.items = 0;
  newStack.value = value;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.items] = value;
  this.items++;
};

stackMethods.pop = function() {
  if (this.items > 0) {
    this.items--;
  }

  return this[this.items];

};

stackMethods.size = function() {
  // debugger;
  return this.items;
};


