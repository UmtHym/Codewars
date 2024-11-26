// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// My Solution

function mergeArrays(a, b) {
    return [...a,...b].sort((a,b) => a - b).filter((item,index,array) => index == array.indexOf(item))
    }