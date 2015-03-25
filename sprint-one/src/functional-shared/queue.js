var Queue = function(){
  var obj = {};
  obj.count = 0;
  //var storage = {};
  _.extend(obj, queueMethods);

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  //this.storage[this.size] = value;
  //storage[this.size] = value;
  this[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function(){
  if(this.count > 0){
    var ans = this[0];
    delete this[0];
    for(var i = 0; i < this.count-1;i++){
      var temp = this[i+1];
      this[i] = temp;
    }
    this.count--;
    return ans;
  }
};

queueMethods.size = function(){
  return this.count;
};


