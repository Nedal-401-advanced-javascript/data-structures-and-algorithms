'use strict';

let zipLists=require('./ll-zip')
let LinkedList=require('./ll-module')
let ll1=new LinkedList()
let ll2=new LinkedList()
console.log(ll2);
describe("Zip the two linked lists together into one",()=>{
    it('check the head of the new linkedlist ',()=>{
        ll1.insert(1)
        ll1.append(2)
        ll2.insert(3)
        ll2.append(4)
expect(zipLists(ll1,ll2).head.value).toEqual(1)
    })
    it('it append multiple values',()=>{
        ll1.append(9)
        ll2.append(10)
    expect(zipLists(ll1,ll2).head.pointer.pointer.pointer.pointer.value).toEqual(9)
      

    })
    it ('will zip not equal linked list data',()=>{
        ll1.append(20)
        ll1.append(30)
    expect(zipLists(ll1,ll2).head.value).toEqual(1)
    })
    
})