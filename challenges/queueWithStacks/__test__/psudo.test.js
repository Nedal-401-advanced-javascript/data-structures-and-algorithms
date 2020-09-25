'use strict';
const PsudoQueue=require('../queue-with-stacks')

describe('Implement a Queue using two Stacks.',()=>{
    

    it('Can successfully enqueue into a queue',()=>{
        let queue=new PsudoQueue()
        queue.enqueue(5)
        expect(queue.obj.top.value).toEqual(5)
    })

    it('Can successfully enqueue multiple values into a queue of stack',()=>{
        let queue=new PsudoQueue()
        queue.enqueue(5)
        queue.enqueue(7)
        queue.enqueue(9)
        expect(queue.obj.top.value).toEqual(9)
    })

    it('Can successfully dequeue out of a queue the expected value',()=>{
        let queue=new PsudoQueue()
        queue.enqueue(5)
        queue.enqueue(7)
        expect(queue.dequeue().value).toEqual(5)
    })

    it("Can successfully peek into a queue, seeing the expected value",()=>{
        let queue=new PsudoQueue()
        queue.enqueue(5)
        queue.enqueue(7)
        expect(queue.dequeue().value).toEqual(5)
        expect(queue.obj2.peek().value.value).toEqual(7)
    })
    it('Can successfully empty a queue after multiple dequeues',()=>{
        let queue=new PsudoQueue()
        queue.enqueue(5)
        queue.enqueue(7)
        expect(queue.dequeue().value).toEqual(5)
        expect(queue.dequeue().value).toEqual(7)
        expect(queue.top).toBeUndefined()
        })

        it('Can successfully instantiate an empty queue',()=>{
            let queue=new PsudoQueue()
            expect(queue instanceof PsudoQueue).toBeTruthy()
        })
        
})