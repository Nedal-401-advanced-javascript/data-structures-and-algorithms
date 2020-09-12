let array = [4, 8, 15, 16, 23, 42];
let x = 42;
function BinarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((end + start) / 2);
        if (arr[middle] == value)
            return middle;

        if (arr[middle] < value)
            start = middle + 1;

        else
            end = middle - 1;
    }

    return -1;
}
console.log(BinarySearch(array, x));