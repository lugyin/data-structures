var Queue = function(){
  var someInstance = {};


  var storage = {};
  // have var size
  var size = 0;

  someInstance.enqueue = function(value){
  // add value to obj at size
  // have to increment all obj keys with +1
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
  // put first key/value into temp var
    // delete first key/value
    //return temp var
    if(size > 0){
    var dqObj = storage[0];
    delete storage[0];
    for(var i = 0; i < size-1; i++){
      var temp = storage[i+1];
      storage[i] = temp;
    }
    size--;
    return dqObj;
    }

  };

  someInstance.size = function(){
  // return size
  return size;
  };

  return someInstance;
};
