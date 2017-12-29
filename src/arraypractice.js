
// 练习1
function student() {
    this.scoreStore = [];
    this.addScore = addScore;
    this.average = average;
    this.wordStore = [];
    this.pushWord = pushWord;
    this.showWord = showWord;

}
function addScore(score) {
    this.scoreStore.push(score);
}

function pushWord(word) {
    this.wordStore.push(word);
}

function showWord() {
    let ss = this.wordStore;
    return this.wordStore.join("");
}

function average() {
    var total = 0;
    for (var i = 0; i < this.scoreStore.length; ++i) {
        total += this.scoreStore[i];
    }

    return total / this.scoreStore.length;
}

var student1 = new student();
student1.addScore(52);
student1.addScore(50);
console.log(student1);
console.log(student1.average());


// 练习2
var wordgroup = ["add", "delete", "update", "modify"];
console.log(wordgroup.join(" "));

console.log(wordgroup.reverse().join(" "));


// 练习4
var student2 = new student();
student2.pushWord("a");
student2.pushWord("b");
student2.pushWord("c");
console.log(student2.showWord());

// 练习3
