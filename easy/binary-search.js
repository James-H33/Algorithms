/*
    Method: Recursion
    Notes: 
    Space O(log(n)) | Time O(log(n)) 

    Example: 
        Given Array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
        Target: 33

    leftPointer = 0;
    rightPointer = 0;

    midPoint = Math.floor(((rightPointer + leftPointer) / 2));
    let value = arr[midPoint];

    [0, 1, 21, 33, 45, 45, 61, 71, 72, 73] length is 10
    Need to calculate mid point: 10 - 1 = 9 / 2 = Math.floor(4.5) = 4;
    [0, 21, 33, 45]
*/

function binarySearch(array, target) {
    return search(array, target, 0, array.length - 1);
}

function search(array, target, left, right) {
    if (left > right) {
        return -1;
    }

    let midPoint = Math.floor((left + right) / 2);
    let midValue = array[midPoint];

    if (midValue === target) {
        return midPoint;
    }

    if (midValue > target) {
        search(array, target, left, right - 1);
    } else {
        search(array, target, left + 1, right);
    }
}