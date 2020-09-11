"use strict;"
let x = 5;
let arr = [4, 8, 15, 23, 42];
let arr3=[2,4,6,8];
let arrEty=[];

function insertShiftArray(arr, x) {
    let arr2 = [];
    let middle = Math.ceil(arr.length / 2);
    console.log(middle)
    if (middle <= 1) {       //condition 1
        arr2[middle] = x;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (i >= middle) {     //condition 2
                if (middle === i) {
                    arr2[i] = x;
                }
                arr2[i + 1] = arr[i];
            } else {           //all other cases
                arr2[i] = arr[i];
            }
        }

    };
    console.log(arr2)
    return arr2;
}

console.log(insertShiftArray(arr, x))

console.log(insertShiftArray(x, x))

console.log(insertShiftArray(arrEty, x))

console.log(insertShiftArray(arrEty, 7))
