var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //use i to find location in storage
  var bucket = this._storage.get(i);
  if(Array.isArray(bucket)){
    // loop through bucket and match key
    // if found update value
    // if not create tuple and push into bucket
    // does the original bucket in the storage array update also?
    var isFound = false;
    for(var j = 0; j<bucket.length;j++){
      if(bucket[j][0]===k){
        bucket[j][1] = v;
        isFound = true;
      }
    }
    if(!isFound){
      bucket.push([k,v]);
    }

  }else{
    //if not create array and use set insert the tuple of [k, v]
    this._storage.set(i, [[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //use i to find location in storage
    // loop through bucket each tuple to match idx 0
    // if match return just v
  var bucket = this._storage.get(i);
  if(bucket){
    for(var j = 0; j<bucket.length;j++){
      if(bucket[j][0]===k){
        return bucket[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  if(bucket){
    for(var j = 0; j<bucket.length;j++){
      if(bucket[j][0]===k){
        bucket.splice(j,1);

      }
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
