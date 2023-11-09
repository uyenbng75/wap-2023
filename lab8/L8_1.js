/**
 * 1. Use constructor function to implement a Singly LinkedList.
 */

function LinkedList(data) {
    this.head = null;
    this.data = data;
    this.next = null;
}

//add
LinkedList.prototype.add = function (data) {
    let newNode = new LinkedList(data);

    if (this.head == null) {
        this.head = newNode;
        return;
    }

    let lastNode = this.head;

    while (lastNode.next != null) {
        lastNode = lastNode.next;
    }

    lastNode.next = newNode;
}

//remove
LinkedList.prototype.remove = function (data) {
    if (this.head == null) {
        return;
    }

    if (this.head.data == data) {
        this.head = this.head.next;
        return;
    }

    let current = this.head;

    while (current.next != null && current.next.data != data) {
        current = current.next;
    }

    if (current.next != null) {
        current.next = current.next.next;
    }
}

//print
LinkedList.prototype.print = function () {
    let result = 'LinkedList{';
    this.current = this.head;

    while (this.current != null) {
        result += this.current.data;
        if (this.current.next) {
            result += ',';
        }
        this.current = this.current.next;
    }

    result += '}';
    console.log(result);
}

let linkedlist = new LinkedList();

linkedlist.add(1);

linkedlist.add(2);

linkedlist.add(3);

linkedlist.print(); //Expected Result: LinkedList{1,2,3};

linkedlist.remove(2);

linkedlist.print(); //Expected Result: LinkedList{1,3};