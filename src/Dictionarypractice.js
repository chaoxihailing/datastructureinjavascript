function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (let key of Object.keys(this.datastore).sort()) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

function count() {
    var n = 0;
    for (var key in Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}

// 这里换成 for... in 的话，就不能正常执行
function clear() {
    for (var key of Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

// 测试
var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries:" + pbook.count());
console.log("David's extendsion:" + pbook.find("David"));
pbook.remove("David");
pbook.showAll();
pbook.clear();
console.log("Number of entries:" + pbook.count());


// 当键的类型为字符串的时候，length属性就不管用了
var nums = new Array();
nums[0] = 1;
nums[1] = 2;
console.log(nums.length);

var pbook1 = new Array();
pbook["David"] = 1;
pbook["Jenifer"] = 2;
console.log(pbook1.length);