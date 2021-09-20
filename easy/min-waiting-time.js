/*
    Initial thoughts:
    Method: Iteration
    - Create a second array too keep track of the previous calculated query times. Iterate of each query and set the execution time in the waitTimes array.
    Also for each iteration calculate the totalWaitTime by using the newly add wait time in the waitTimes array.

    Example: Input -> [3, 2, 1, 2, 6] Min Query Time = 17
    Wrong: [0, 3, 5, 6, 8] -> 22 !== 17
    Correct: Sort(Input) -> [1, 2, 2, 3, 6] -> [0, 1, 3, 5, 8] -> 17

    Space O(n) | Time O(n log(n))

*/