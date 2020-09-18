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
        return temp.value;
    }
    peek(){
        if(this.isEmpty()){
            throw new RangeError('Can not peek the stack is empty')
        }
        return this.top.value;
    }
    isEmpty(){
        return this.top === null
    }
}

class Queue{
    constructor(){
        this.front=null;
    }

    enqueue(value){
        let node=new Node(value)

        if(!this.front){
            this.front=node
        }else{
            let rare=this.front;
            while (rare.next) {
                rare=rare.next
            }
            rare.next=node;
        }
        return this;
    
    }
    
    dequeue(){
        if(this.isEmpty()){
            throw new RangeError('Can not dequeue the Queue is empty')
        }
        let temp=this.front;
        this.front=this.front.next;
        temp.next=null;
        return temp.value;
    }

    peek(){
        if (this.isEmpty()){
            throw new RangeError('Can not peek the Queue is empty')
        }
        return this.front.value;
    }

    isEmpty(){
        return this.front === null;
    }
}

module.exports={
    Queue:Queue,
    Stack:Stack
}