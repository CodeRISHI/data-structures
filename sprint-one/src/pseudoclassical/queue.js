var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.items = 0;
};

Queue.prototype.enqueue = function(value) {
  for (var i = this.items; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
  this.items++;
};

Queue.prototype.dequeue = function() {
  if (this.items > 0) {
    var temp = this[this.items - 1];
    delete this[this.items - 1];
    this.items--;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.items;
};

