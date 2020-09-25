'use strict';
const Stack = require('./Stack')

class PsudoQueue {
    constructor() {
        //instantiat the two obj
        this.obj = new Stack(),
            this.obj2 = new Stack()
    }

    enqueue(value) {
        return this.obj.push(value)
    }
    dequeue() {
        if (!this.obj.top && !this.obj2.top)
            return 'it is empty'
        if (!this.obj2.top) {
            while (this.obj.top) {
                this.obj2.push(this.obj.top)
                this.obj.pop()
            }
        }
        let top = this.obj2.top
        this.obj2.pop()
        return top.value
    }


}

// let queue=new PsudoQueue();

// queue.enqueue(8)
// queue.enqueue(10)
// queue.enqueue(12)
// // console.log(queue.enqueue(13))
// console.log(queue)
// console.log(queue.dequeue())


// queue.enqueue(50)
// // console.log(queue.obj.top)


// console.log(queue)

module.exports=PsudoQueue;