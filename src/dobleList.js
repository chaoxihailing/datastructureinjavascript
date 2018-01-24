function Node(element){
    this.element = element;
    this.next =null;
    this.previous =null;
}

function LList(){
    this.head = new Node("head");
    this.find =find;
    this.insert =insert;
    this.display =display;
    this.remove =remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

function find(item){
    let currNode = this.head;
    while (currNode.element !== item){
        currNode =currNode.next;
    }
    return currNode;
}

function insert(newElement, iter){
    let newNode = new Node(newElement);
    let current = this.findLast(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next =newNode;
}

function display(){
    let currNode = this.head;
    while (!(currNode.next.element == null)){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function remove(item){
    let currNode = this.find(item);
    if(!(currNode.next == null)){
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous
        currNode.next = null;
        currNode.previous = null;
    }
}

function findLast(){
    let currNode = this.head;
    while(!(currNode.next == null)){
        currNode = currNode.next;
    }
    return currNode;
}

function dispReverse(){
    let currNode = this.head;
    currNode =this.findLast;
    while(!(currNode.previous == null)){
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}


// 循环链表
function LList(){
    this.head = new Node("head");
    this.head.next= this.head;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function display(){
    let currNode =this.head;
    while(!(currNode.next == null) && !(currNode.next.element == "head")) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
