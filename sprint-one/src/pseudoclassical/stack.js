var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.items = 0;
};

Stack.prototype.push = function(value) {
  this[this.items] = value;
  this.items++;
};

Stack.prototype.pop = function() {
  if (this.items > 0) {
    this.items--;
  }

  return this[this.items];
};

Stack.prototype.size = function() {
  return this.items;
};


