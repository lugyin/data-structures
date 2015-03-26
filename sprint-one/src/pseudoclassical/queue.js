var Queue = function() {
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
}

Queue.prototype.dequeue = function(){
  if(this.count > 0){
    var temp = this.storage[0];
    delete this.storage[0];
    for(var i = 0; i < this.count-1;i++){
      this.storage[i] = this.storage[i+1];
    }
    this.count--;
    return temp;
  }
}

Queue.prototype.size = function(){
  return this.count;
}


