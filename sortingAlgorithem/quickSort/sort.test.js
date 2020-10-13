"use strict";
const sort=require('./quick.js')
// let arr=[1,30,2,9,10]
// let n= arr.length
// console.log(QuickSort(arr,0,n-1))
describe('check the sort function',()=>{
    it('should sort the number',()=>{
        let arr=[8,4,23,42,16,15];
        let n= arr.length
        let sorted=sort(arr,0,n-1)
        for (let i = 1; i < sorted.length; i++) {
            expect(sorted[i]>sorted[i-1]).toBytruthy()
            
        }
    })
})