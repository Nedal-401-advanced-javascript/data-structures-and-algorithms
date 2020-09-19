
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

    }
    
    

      append(val){
        let node = new Node(val);

        let currnet = this.head;
        while (currnet.pointer) {
            currnet = currnet.pointer;
        };
        currnet.pointer = node;
        return this;
        
    }

}

module.exports=LinkedList;