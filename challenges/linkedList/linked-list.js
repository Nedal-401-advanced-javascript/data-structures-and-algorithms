"use strict";

class LinkedList {
    constructor() {
        this.head = null
    }

    //adds a new node with that value to the head of the list 
    insert(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            return this;
        };
    }

    append(val) {
        let node = new Node(val);

        let currnet = this.head;
        while (currnet.pointer) {
            currnet = currnet.pointer;
        };
        currnet.pointer = node;
        return this;

    }

    insertAfter(value, newVal) {
        let node = new Node(newVal);
        if (this.includes(value)) {

            let currnet = this.head;
            while (currnet.value != value) {
                currnet = currnet.pointer;
            }
            node.pointer = currnet.pointer;
            currnet.pointer = node;
            return this;

        }

    }

    insertBefor(value, newVal) {
        let node = new Node(newVal);
        if (this.includes(value)) {
            let lastCurent = '';
            let currnet = this.head;
            while (currnet.value != value) {

                lastCurent = currnet;
                currnet = currnet.pointer;
            }
            node.pointer = lastCurent.pointer;
            lastCurent.pointer = node;
            return this;
        }
    }


    includes(val) {
        let currnet = this.head;
        while (currnet.pointer || currnet.value === val) {
            // console.log(currnet)
            if (currnet.value === val) {
                return true;
            }
            currnet = currnet.pointer;
        }
        return false;
    }

    // "{ a } -> { b } -> { c } -> NULL"

    toString() {
        let current = this.head;
        let toBePrint = `{${current.value}}`;
        while (current.pointer) {

            current = current.pointer;
            toBePrint += ` -> {${current.value}}`

        }
        toBePrint += ` -> ${current.pointer}`;
        return toBePrint;
    }
}
module.exports =LinkedList;

// let ll=new LinkedList()
// ll.insert(8)
// ll.append(9)
// ll.append(20)
// ll.append(8)
// ll.append(7)
// console.log(ll)
// console.log(ll.includes(21))
// console.log(ll.toString())
// ll.insertBefor(20, 15)
// ll.insertAfter(20, 15)
// console.log(ll.toString())


