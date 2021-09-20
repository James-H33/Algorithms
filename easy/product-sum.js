/*
    Method: Iteration and recursion
    Notes: Iterate over the array and at each instance of an inner array call the function recusivley and multiple
    the inner sum by the depth and then return value to the initial iteration to be summed.
    Space O(d) - Where d is the level of depth of Special arrays
    Time O(n)
*/ 

function productSum(array, depth = 1) {
    let total = 0;

    for (let value of array) {
        if (value instanceof Array)  {
            total += productSum(value, depth + 1);
        } else {
            total += value;
        }
    }

    return total * depth;
}