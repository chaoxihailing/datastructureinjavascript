// function Node(element) {
//     this.element = element;
//     this.next = null;
//     this.previous = null;
// }

// function LList() {
//     this.head = new Node("head");
//     this.find = find;
//     this.insert = insert;
//     this.display = display;
//     this.remove = remove;
//     this.findLast = findLast;
//     this.dispReverse = dispReverse;
// }

// function find(item) {
//     let exit = indexof(item);

// }

// function insert(elementNode, item) {
//     let newNode = new Node(elementNode);
//     let current = this.find(item);
//     if (current) {
//         newNode.next = current.next;
//         newNode.previous = current;
//         current.next = newNode;
//     }
// }

function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    // this.remove = remove;
    this.display = display;
}

function find(item) {
    // 赋值没有作用
    var currNode = this.head;
    console.log(currNode);
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Rust", "Conway");
cities.insert("Alma", "Ruse");
cities.display();
cities.remove("Alma");
cities.display();