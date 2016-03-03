var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.items = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  for (var i = this.items; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
  this.items++;

};

queueMethods.dequeue = function() {
  if (this.items > 0) {
    var temp = this[this.items - 1];
    delete this[this.items - 1];
    this.items--;

    return temp;
  }

};

queueMethods.size = function() {
  return this.items;

};

