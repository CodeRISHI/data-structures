var Stack = function(value) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStorage = {};
  newStorage.value = value;
  newStorage.items = 0;

  // debugger;
  _.extend(newStorage, stackMethods);
  console.log(newStorage);
  console.log(Object.keys(Stack));

  return newStorage;
};


stackMethods = {};

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
  return this.items;
};

