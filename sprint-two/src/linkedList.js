var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.storage = {};

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
    }

    if(list.tail === null){
      list.tail = newNode;
    } else{
      list.tail.next = newNode;
      list.tail = newNode;
    }
    list.storage[newNode] = newNode;
  };

  list.removeHead = function(){
    //remove first node
      //change list.head to the new first node
      // use the node.next of current head to point to new head.
    if(list.head !== null){
      var tempHead = {};
      _.extend(tempHead, list.head);
      //list.head = list.head.next;
      delete list.storage[list.head];
      list.head = tempHead.next;
      return tempHead.value;
    }
  };

  list.contains = function(target){
    for(var node in list.storage){
      if(node.value === target){
        return true;
      }
     else {
      return false;
    }
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
