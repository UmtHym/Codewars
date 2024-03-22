// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples

// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    let smallest = Math.min(...numbers)
    let newArray = numbers.filter((_,i)=> i !== numbers.indexOf(smallest))
    return newArray;
  }

  //Inside filter method we check if the index of the current element is not the same with the smallest elements index, which we established earlier,than filter is true and it passes to the new array. when it is the same, than the function becomes false and filters out that element. (So filter in principle filters out the elements that comes out false inside function)