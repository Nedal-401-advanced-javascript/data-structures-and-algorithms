'use strict';

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


class Stack{
    constructor(){
    this.top=null;
    }

    push(value){
        let node=new Node(value)
        node.next=this.top
            this.top=node; 
            return this;

    }
    pop(){
        if (this.isEmpty()){
            throw new RangeError('Can not pop the stack is empty')

        }
        let temp=this.top;
        this.top=this.top.next;
        return temp;
    }
    peek(){
        if(this.isEmpty()){
            throw new RangeError('Can not peek the stack is empty')
        }
        return this.top;
    }
    isEmpty(){
        return this.top === null
    }
}

module.exports=Stack;