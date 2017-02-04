function HashTable(size) {
    this.table = Array(size);
    this.sizeOfTable = size;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function(key) {
    var total = 0;
    for(var i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    //return the index number within sizeOfTable
    return (total % this.sizeOfTable);
}

HashTable.prototype.insert = function(key, value) {
    var index = this.hash(key);
    if(!this.table[index]) {
        this.table[index] = new HashNode(key, value);
    }else if(this.table[index].key === key) {
        //if node with same key exists, than update that node
        this.table[index].value = value;
    }else {
        //if node exists and they have different key but same index, than add new node as a linked list
        var currentNode = this.table[index];
        while(currentNode.next) {
            currentNode = currentNode.next;
            //if there are linked nodes on particular index and want to update specific node than traverse through those nodes and //update the value
            if(currentNode.next.key === key) {
              currentNode.next.value = value;
               //after updating the value just return without creating any new node at the end of the linked list 
               return;
            }
        }
        
        //after travrsing to the  last item of the linked list of same index insert new node
        currentNode.next = new HashNode(key, value);
    }
}

var ht = new HashTable(20);
ht.insert("email", "jk@jk.com");
ht.insert("email", "jk@jk1.com");
ht.insert("email1", "jk@jk1.com");
ht.insert("email2", "jk@jk1.com");
ht.insert("Dean", "dean@gmail.com");
ht.insert("Dane", "dane1@gmail.com");
console.log(ht.table);