

var Graph = function(){
  this.storage = [];
};

Graph.prototype.addNode = function(node){
  //method that takes a new node and adds it to the graph
  var newNode = GraphNode(node);
  this.storage.push(newNode);
};

Graph.prototype.contains = function(node){
  //method that takes any node and returns a
  //boolean reflecting whether it can be found in the graph
  if(this.storage.length > 0) {
    for(var i = 0; i < this.storage.length; i++){
      if(this.storage[i].value === node){
        return true;
      }
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  //method that takes any node and removes
  //it from the graph, if present. All
  //edges connected to that Node are removed as well.
  if(this.storage.length > 0) {
    for(var i = 0; i < this.storage.length; i++){
      if(this.storage[i].value === node){
         this.storage.splice(i,1);
      }
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  //method that returns a boolean reflecting
  //whether or not two nodes are connected
  if(this.storage.length > 0) {
    for(var i = 0; i < this.storage.length; i++){
      if(this.storage[i].value === fromNode){
         if(_.contains(this.storage[i].edges, toNode)){
            return true;
         }
      }
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //method that creates a edge (connection) between
  //two nodes if they both are present within the graph
  // var index = _.indexOf(this.storage, function(node){
  //   if(node.value === fromNode)
  //     return node;
  // });

  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].value === fromNode){
      this.storage[i].edges.push(toNode);
    }
  }
  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].value === toNode){
      this.storage[i].edges.push(fromNode);
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.storage.length > 0) {
    for(var i = 0; i < this.storage.length; i++){
      if(this.storage[i].value === fromNode){
         var idx = _.indexOf(this.storage[i].edges, toNode)
           if(idx > -1){
            this.storage[i].edges.splice(idx,1);
           }
         }
      }
    }
};

Graph.prototype.forEachNode = function(cb){
  //method that traverses through the graph, calling
  //a passed in function once on each node
  // _.each(this.storage, function(item, toNode){
  //     cb(item, toNode);
  // });
  for(var i = 0; i < this.storage.length; i++){
    cb.call(this, this.storage[i].value);
  }
};

var GraphNode = function(value){
  var node = {};

  node.value = value;
  node.edges = [];

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */



