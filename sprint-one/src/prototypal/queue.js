var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.count = 0;
  return instance;
};


var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
};


queueMethods.dequeue = function(){
  if(this.count > 0){
    var temp = this.storage[0];
    delete this.storage[0];
    for(var i = 0; i < this.count-1; i++){
      this.storage[i] = this.storage[i+1];
    }
    this.count--;
    return temp;
  }
};

queueMethods.size = function(){
  return this.count;
};
