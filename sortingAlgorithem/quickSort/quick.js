'use strict';
function QuickSort(arr, left, right) {
  if (left < right) {
    let position = Partition(arr, left, right)
    QuickSort(arr, left, position - 1)
    QuickSort(arr, position + 1, right)
  }
  return arr

}


function Partition(arr, left, right) {
  let pivot = arr[right]
  let low = left - 1
  for (let i = left; i<right; i++) {
    if (arr[i] <= pivot){
     low=low+1;
    Swap(arr, i, low)
    }

  }
  Swap(arr, right, low + 1)
  return low + 1
}

// return the pivot index point

function Swap(arr, i, low) {
  console.log('>>>>',arr,i,low)
  let temp = arr[i]
  arr[i] = arr[low]
  arr[low] = temp
  console.log("<<<<",arr)
  return arr
}
// let arr=[1,30,2,9,10]
// let n= arr.length
// console.log(QuickSort(arr,0,n-1))
