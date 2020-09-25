'use strict';

let Classes=require('./stacks-and-queues')

describe('testing the functionality of the stack and queue ',()=>{
    it('Can successfully push onto a stack',()=>{
        let newStack=new Classes.Stack();
        newStack.push(5)
        expect(newStack.top.value).toEqual(5)
        expect(newStack instanceof Classes.Stack).toBeTruthy()
    })

    it('Can successfully push multiple values onto a stack',()=>{
        let newStack=new Classes.Stack()
        newStack.push(9)
        newStack.push(4)
        newStack.push(2)
        expect(newStack.top.value).toEqual(2)

    })

    it('Can successfully pop off the stack',()=>{
        let newStack=new Classes.Stack()
        newStack.push(9)
        newStack.push(4)
        newStack.push(8)
        expect(newStack.pop()).toEqual(8)
        expect(newStack.pop()).toEqual(4)

    })

    it('Can successfully empty a stack after multiple pop',()=>{
        let newStack=new Classes.Stack()
        newStack.push(9)
        newStack.push(4)
        newStack.push(8)
        expect(newStack.pop()).toEqual(8)
        expect(newStack.pop()).toEqual(4)
        expect(newStack.pop()).toEqual(9)
    })

    it('Can successfully peek the next item on the stack',()=>{
        let newStack=new Classes.Stack()
        newStack.push(9)
        newStack.push(4)
        newStack.push(8)
        expect(newStack.pop()).toEqual(8)
        expect(newStack.peek()).toEqual(4)
    })
    
    it("Can successfully instantiate an empty stack",()=>{
        let newStack=new Classes.Stack()
        expect(newStack.top).toBeNull()

    })

        it("Calling pop or peek on empty stack raises exception",()=>{
            let newStack=new Classes.Stack()
            expect(()=>newStack.peek()).toThrow('Can not peek the stack is empty')
            expect(()=>newStack.peek()).toThrow(RangeError)
        })

        it('Can successfully enqueue into a queue',()=>{
            let newQueue=new Classes.Queue()
            newQueue.enqueue(5)
            expect(newQueue.front.value).toEqual(5)
        })

        it('Can successfully enqueue multiple values into a queue',()=>{
            let newQueue=new Classes.Queue()
            newQueue.enqueue(5)
            newQueue.enqueue(7)
            newQueue.enqueue(9)
            expect(newQueue.front.value).toEqual(5)
        })

        it('Can successfully dequeue out of a queue the expected value',()=>{
            let newQueue=new Classes.Queue()
            newQueue.enqueue(5)
            newQueue.enqueue(7)
            expect(newQueue.dequeue()).toEqual(5)
        })

        it("Can successfully peek into a queue, seeing the expected value",()=>{
            let newQueue=new Classes.Queue()
            newQueue.enqueue(5)
            newQueue.enqueue(7)
            expect(newQueue.dequeue()).toEqual(5)
            expect(newQueue.peek()).toEqual(7)
        })
        it('Can successfully empty a queue after multiple dequeues',()=>{
            let newQueue=new Classes.Queue()
            newQueue.enqueue(5)
            newQueue.enqueue(7)
            expect(newQueue.dequeue()).toEqual(5)
            expect(newQueue.dequeue()).toEqual(7)
            expect(newQueue.front).toBeNull()
            })

            it('Can successfully instantiate an empty queue',()=>{
                let newQueue=new Classes.Queue()
                expect(newQueue instanceof Classes.Queue).toBeTruthy()
            })
            it('Calling dequeue or peek on empty queue raises exception',()=>{
                let newQueue=new Classes.Queue()
                expect(()=>newQueue.dequeue()).toThrow(RangeError)
                expect(()=>newQueue.peek()).toThrow(RangeError)

    })
})
