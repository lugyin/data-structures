var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
    }
    if(list.tail === null){
      list.tail = newNode;
    } else{
      list.tail.next = newNode;
      // list[list.tail].next = newNode;
    }
    list[newNode] = newNode;



  };

  list.removeHead = function(){
    //remove first node
      //change list.head to the new first node
      // use the node.next of current head to point to new head.
    if(list.head !== null){
      var nextHead = list.head;
      delete list[list.head]
      list.head = nextHead.next;
      return nextHead;
    }
  };

  list.contains = function(target){
    for(var key in list){
      if(key.value === target)
        return true;
    } else {
      return false;
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
