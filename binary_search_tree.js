//binary search tree node
function BSTN(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
}

BSTN.prototype.insert = function(value) {
    
    //if val is less than current node's value, insert on left node
    if(value <= this.value) {
        //check if left node already exist or not
        if(this.leftNode === null) this.leftNode = new BSTN(value)
        else  this.leftNode.insert(value);
    } 
    
    //if val is greater than current node's value, insert on right node
    if(value > this.value) {
        //check if right node already exist or not
        if(this.rightNode === null) this.rightNode = new BSTN(value)
        else  this.rightNode.insert(value);
    }
}

BSTN.prototype.contains = function(value) {
    //if passed value is matched with the current node's value return true
    if(this.value === value) {
        return true;
    }
    else {
        //if value is not found on current node, check on left or right nodes
        if(value <= this.value) {
            //it might be on left nodes
            if(this.leftNode === null) return false;
            else return this.leftNode.contains(value);
            
        }else {
            //value might be on the right nodes
            if(this.rightNode === null) return false;
            else return this.rightNode.contains(value);
        }
    }
}

BSTN.prototype.getMinValue = function() {
    //minimum value lies on left node, so try to search it only on left nodes
    if(this.leftNode === null) return this.value;
    else return this.leftNode.getMinValue();
}

BSTN.prototype.getMaxValue = function() {
    //maximum value lies on right node, so try to search it only on right nodes
    if(this.rightNode === null) return this.value;
    else return this.rightNode.getMaxValue();
}

BSTN.prototype.depthFirstTraversal = function(funcCallback, order) {
    //if order is in-order, traverse it from lowest to highest in a sorted order, i.e first left, parent and right node
    //if the order is pre-order, traverse it from parent, left and right node
    //if order is post-order, traverse it from left, right and parent node
    if(order === "pre-order") funcCallback(this.value);   
    if(this.leftNode !== null) this.leftNode.depthFirstTraversal(funcCallback, order); 
    if(order === "in-order") funcCallback(this.value);
    if(this.rightNode !== null) this.rightNode.depthFirstTraversal(funcCallback, order);
    if(order === "post-order") funcCallback(this.value);
    
}
var bst = new BSTN(50);
bst.insert(40);
bst.insert(60);

bst.insert(30);
bst.insert(45);
bst.insert(55);
bst.insert(60);

console.log(bst);

console.log(bst.contains(60));

function printValue(value) {
    console.log(value);
}

bst.depthFirstTraversal(printValue, "pre-order");



