"use strict";

let insertionSort=(arr)=>{
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let j = i-1;
        let temp=arr[i];
        while (j>=0 && temp<arr[j]) {
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=temp;        
    }
}

module.exports=insertionSort