'use strict';

class HashTable {
    constructor(size) {
        this.size = size;
        this.entries = new Array(size); // bucket
    }

    hash(key) {
        // return hash Index
        let charArr = key.split('');
        return charArr.reduce((p, n) => {
            return p + n.charCodeAt(0);
        }, 0) * 599 % this.size;
    }

    add(key, value) {
        // Linked List to represent the value for each key in the bucket
        let hashIndex = this.hash(key);
        console.log("hashIndex: ", hashIndex)
        if (!this.entries[hashIndex]) {
            // create a new one
            this.entries[hashIndex] = new LinkedList();
        }

        let entry = {
            [key]: value
        };
        this.entries[hashIndex].append(entry); // LinkedList append method
    }

    get(key) {
        let hashIndex = this.hash(key);
        return this.entries[hashIndex];
    }

    contains(key) {
        return this.entries[key] != null;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    print() {

    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;

        } else {

            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
}

// example
let myHash = new HashTable(1024);




// console.log(myHash.entries[395]);

console.log(myHash.entries[myHash.hash('Yahya')]);
// console.log(myHash.entries[395].head);
// console.log(myHash.entries[395].head.next);
// console.log(myHash.entries[395].head.next.value);

module.exports=HashTable;