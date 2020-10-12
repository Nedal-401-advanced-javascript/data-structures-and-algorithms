"use strict";
function Mergesort(arr){
  let n= arr.length
    if (n > 1){

      let mid = n/2;
      let left = arr.slice(0,mid);
      let right= arr.slice(mid);
      Mergesort(left);
      Mergesort(right);
      // [2,3,5,7,13,11]
      console.log(left,'<><><><<>>',right)
      Merge(left, right, arr);
    }
    return arr

}
           

function Merge(left, right, arr){
    let i = 0;
    let j = 0;
    let k = 0;
    // 
    while (i < left.length && j < right.length){
        if (left[i] <= right[j]){
          arr[k] = left[i]
          i = i + 1
        }else{
          arr[k] = right[j]
          j = j + 1
        }
        k = k + 1
    }

    while (i < left.length){
       arr[k] = left[i] 
       i+= 1
       k+= 1
      
    }
          
        while( j < right.length){
          
            arr[k] = right[j] 
            j+= 1
            k+= 1
        }

console.log('ARRAY',arr)
    return arr
};
// console.log(Mergesort([8,4,23,42,16,15]))
        
            
module.exports=Mergesort;