// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

let summation = (num) => {
    let result = 0
    for(let i = 1; i<= num; i++){
      result += i;
    }
    return result
  }
  
  
  // passing in a number, positive integer > 0, not a float
  // return an integer > 0 that is the sum of the integers from 1 to num
  // declare a variable to hold the the running total
  // loop through each value but not exceeding the actual num
  // use a for loop for starting at 1 going to the value of num
  // inside of each loop, add the current integer value to the running total