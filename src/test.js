// Переделать ArrayList протативном стиле. Прочитай про Linked list. Свойства будут :
function ArrayList(array) {
    this.array = array;
    this.size = array.length;
}

ArrayList.prototype.clear = function () {
    this.array = [];
    this.size = 0;
};

function Node(value) {
    this.value = value;
    this.next = null;
}

let node2 = new Node(5);

console.log(node2);

function LinkedList() {
    this.root = null;
    this.size = 0;
};

LinkedList.prototype.addElm = function(value) {
    const tempNode = new Node(value);
    tempNode.next = this.root;
    this.root = tempNode;
    this.size++
};