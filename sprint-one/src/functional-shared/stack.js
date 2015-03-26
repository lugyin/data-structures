var Stack = function() {
  var instance = {};
  instance.count = 0;
  instance.storage = {};
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.push = function (value){
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function (){
  if(this.count > 0){
    var temp = this.storage[this.count-1];
    delete this.storage[this.count-1];
    this.count--;
    return temp;
  }
};

stackMethods.size = function (){
  return this.count;
};

