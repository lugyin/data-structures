var BinarySearchTree = function(value){
  var obj = BinNode(value);

  obj.insert = function(newVal){
    var newNode = BinNode(newVal);

    var testRec = function(node){
      if(lessThan(node.value, newNode.value) > 0){
        if(node.left === null){
          node.left = newNode;
        } else {
          testRec(node.left);
        }
      } else if (lessThan(node.value, newNode.value) < 0){
        if(node.right === null) {
          node.right = newNode;
        } else {
          testRec(node.right);
        }
      }
    };

    testRec(obj);

  };

  obj.contains = function(val){
    var isContained = false;

    var containsRecurse = function(node){
      if(node.value === val){
        isContained = true;
        return isContained;
      }else{

        if(lessThan(node.value, val) > 0){
          if (node.left !== null){
            if(node.left.value === val){
              isContained = true;
              return isContained;
            } else{
              containsRecurse(node.left);
            }
          }
        } else if (lessThan(node.value, val) < 0){
            if (node.right !== null){
              if(node.right.value === val) {
                isContained = true;
                return isContained;
              }else{
                containsRecurse(node.right);
              }
            }
        }
      }
    };

    containsRecurse(obj);
    return isContained;
  };

  obj.depthFirstLog = function(cb){

     var depthRec = function(node){
        cb.call(this, node.value);
        if(node.left !== null){
          depthRec(node.left);
        }
        if(node.right !== null) {
          depthRec(node.right);
        }
    };

    depthRec(obj);

  };



  // obj.exchange = function(oldValue, newValue){
  //   if(oldValue < newValue)
  //     return -1;
  //   else if(oldValue > newValue)
  //     return 1;
  //   else
  //     return 0;
  // }
  return obj;
};

  var lessThan = function(oldValue, newValue){
    if(oldValue < newValue)
      return -1;
    else if(oldValue > newValue)
      return 1;
    else
      return 0;
  }

var BinNode = function(value){
  var obj = {};
  obj.value = value;

  obj.left = null;
  obj.right = null;

  return obj;
}




//A .left property, a binary search tree (BST) where all values are lower than than it the current value.
// a right property, a BST where all values are higher than than it the current value.
// a insert() method, which accepts a value and places in the tree in the correct position.
// a .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.

