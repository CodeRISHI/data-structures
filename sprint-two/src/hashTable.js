

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var tuple = [k, v]; 
  var found = false;

  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  }
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      found = true;
      this._storage[index][i][1] = v;
    }
  }
  if (!found) {
    this._storage[index].push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index].splice(i, 1);
    }
  }
};

//Check if # of keys / array.length > (array.length * 0.75)
  //Double size (this._limit) of array and rehash current tuples
//if keys / array.length < (array.length * 0.25)
  //Halve size (this._limit) of array and rehash current tuples



/*
 * Complexity: What is the time complexity of the above functions?
 */


