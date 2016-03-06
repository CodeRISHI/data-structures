

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._keys = 0;
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
    console.log(tuple);
  }
  this._keys++;

  //if hash table with newly added key is too small for keys
    //double the size and rehash
  if (this._keys > (this._limit * 0.75)) {
    this._limit *= 2;
    this.rehash(this._limit);
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var temp;


  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._keys--;
        temp = this._storage[index].splice(i, 1);
      }
    }
  }

  if (this._keys < (this._limit * 0.25)) {
    // debugger;
    this._limit /= 2;
    this.rehash(this._limit);
  }

  return temp;
};

//Check if # of keys / array.length > (array.length * 0.75)
  //Double size (this._limit) of array and rehash current tuples
//if keys / array.length < (array.length * 0.25)
  //Halve size (this._limit) of array and rehash current tuples

HashTable.prototype.rehash = function(limit) {
  // debugger;

  var oldStorage = this._storage || [];
  this._storage = [];
  this._keys = 0; 
 
  for (var i = 0; i < limit; i++) {
    if (oldStorage[i]) {
      for (var j = 0; j < oldStorage[i].length; j++) {
        if (oldStorage[i][j].length > 0) {
          this.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
        }
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


