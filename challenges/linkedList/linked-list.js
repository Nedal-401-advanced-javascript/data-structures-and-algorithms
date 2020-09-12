'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.pointer = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
    }
    insert(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            return this;
        };

        let currnet = this.head;
        while (currnet.pointer) {
            currnet = currnet.pointer;
            // console.log(currnet)
        };
        currnet.pointer = node;
        return this;
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

    toString() {
        // "{ a } -> { b } -> { c } -> NULL"
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
// module.exports = Node;


// without default
export {
  Node,
  LinkedList,
}

    
// let ll=new LinkedList()
// ll.insert(8)
// ll.insert(9)
// ll.insert(20)
// ll.insert(8)
// ll.insert(7)
// console.log(ll)
// console.log(ll.includes(21))
// console.log(ll.toString())


