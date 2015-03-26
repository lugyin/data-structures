var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me


  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
//method, takes any value, sets that as the target
//of a node, and adds that node as a child of the tree
// create a new tree
var newTree = Tree(value);

// add that tree to parent tree's children array push
this.children.push(newTree);

};

treeMethods.contains = function(target){
//method, takes any input and returns a boolean reflecting
//whether it can be found as the
//value of the target node or any descendant node
// flatten all children arrays into a single array test if contains.
var isContained = false;
// if(this.children.length > 0){
  // for(var i = 0;i<this.children.length;i++){
  // }
// }

var recurseFunc = function(node){

  if(node.value === target){
    isContained = true
    return true;
  }
  if(!isContained && node.children.length > 0){
    for(var i = 0;i<node.children.length;i++){
      recurseFunc(node.children[i]);
    }
  }

};

recurseFunc(this);
return isContained;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
