<<<<<<< HEAD
function Node(data, left, right) {
=======
function Node(data,left,right){
>>>>>>> 3addd3f80307fb88ddee921384fccee4fc7989df
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

<<<<<<< HEAD
function show() {
    return this.data;
}

function BST() {
=======
function show(){
    return this.data;
}

function BST(){
>>>>>>> 3addd3f80307fb88ddee921384fccee4fc7989df
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

<<<<<<< HEAD
function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                curreturn = current.right;
                if (current == null) {
=======
function insert(data){
    let n = new Node(data,null,null);
    if(this.root === null){
        this.root =n;
    }else{
        let current = this.root;
        let parent;
        while(true){
            parent = current;
            if(data< current.data){
                current = current.left;
                if(current == null){
                    parent.left =n;
                    break;
                }
            }else{
                current = current.right;
                if(current == null){
>>>>>>> 3addd3f80307fb88ddee921384fccee4fc7989df
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

<<<<<<< HEAD
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
=======

// 中序遍历, 使用递归的方式实现
function inOrder(node){
    if(!(node ==null)){
        irOrder(node.left);
        putstr(node.show() + " ");
>>>>>>> 3addd3f80307fb88ddee921384fccee4fc7989df
        inOrder(node.right);
    }
}

<<<<<<< HEAD
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);
=======
// 先序遍历
function preOrder(node){
    if(!(node == null)){
        putstr(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

// 后序遍历
function postOrder(node){
    if(!(node ==null)){
        postOrder(node.left);
        postOrder(node.right);
        putstr(node.show() + " ");
    }
}

// 查找最小值
function getMin(){
    let current = this.root;
    while (!(current.left == null)){
        current = current.left;
    }
    return current.data;
}

function getMax(){
    let current = this.root;
    while(!(current.right == null)){
        current = current.right;
    }
    return current.data;
}

function find(data){
    let current = this.root;
    while(current != null){
        if(current.data == data){
            return current;
        }else if(data < current.data){
            current = current.left;
        }else{
            current =current.right;
        }
    }
    return null;
}

// 删除子节点
function remove(data){
    root  = removeNode(this.root, data);
}

function removeNode(node,data){
    if(node == null){
        return null;
    }
    if(data == node.data){
        // 没有子节点的节点
        if(node.left == null && node.right == null){
            return null;
        }

        // 没有左子节点的节点
        if(node.left == null){
            return node.right;
        }
        // 没有右子节点的节点
        if(node.right == null){
            return node.left;
        }

        // 有两个子节点的节点
        let tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right,tempNode.data);
        return node;
    }else if(data<node.data){
        node.left = removeNode(node.left,data);
        return node;
    }else{
        node.right = removeNode(node.right,data);
        return node;
    }
}
>>>>>>> 3addd3f80307fb88ddee921384fccee4fc7989df
