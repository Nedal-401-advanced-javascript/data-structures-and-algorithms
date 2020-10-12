"use strict";
const sort=require('./mergesort')

describe('check the sort function',()=>{
    it('should sort the number',()=>{
        let arr=[8,4,23,42,16,15];
        let sorted=sort(arr)
        for (let i = 1; i < sorted.length; i++) {
            expect(sorted[i]>sorted[i-1]).toBytruthy()
            
        }
    })
})