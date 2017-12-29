function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 初始化一个空数组来保存列表元素
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}


// 遍历数组，查找最小值的方法
function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function dequeue() {
    var entry = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < this.dataStore[entry].code) {
            entry = i;
        }
    }
    return this.dataStore.splice(entry, 1);
}