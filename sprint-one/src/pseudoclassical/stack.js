var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function(){
  if(this.count > 0){
    var temp = this.storage[this.count-1];
    delete this.storage[this.count-1];
    this.count--;
    return temp;
  }
};

Stack.prototype.size = function(){
  return this.count;
};
