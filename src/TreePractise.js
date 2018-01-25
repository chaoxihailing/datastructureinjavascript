function Node(data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
}

function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}

function prArray(arr) {
    console.log(arr[0].toString() + " ");
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i].toString() + " ");
        if (i % 10 == 0) {
            console.log("\n");
        }
    }
}

function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}