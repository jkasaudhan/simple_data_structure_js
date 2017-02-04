//Linked list
function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, prevNode, nextNode) {
    this.value = value;
    this.prevNode = prevNode;
    this.nextNode = nextNode;
}

LinkedList.prototype.addToHead = function(value) {
   var newNode = new Node(value, null, this.tail);
   if(this.head !== null) {
       if(this.tail !== null) newNode.nextNode = this.tail; 
       this.head.nextNode = newNode;
   }else {
       this.head = newNode;
       if(this.tail === null) {
           this.tail = newNode; 
       }
   }
}

LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, this.tail, null);
    
    if(this.tail !== null) {
        this.tail.prevNode = newNode;
    }else {
        this.tail = newNode;
    }
     if(this.head === null) this.head = newNode;
}

var llst = new LinkedList();
llst.addToHead(50);
llst.addToTail(40);
console.log(llst);