// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

export function noOdds(values: number[]): number[] {
  return values.filter((el) => el % 2 === 0);
}

//Input - Array if integers
//Output - Array of integers (Only the even numbers) in the same order

//console.log(noOdds([0,1]), 0)
//console.log(noOdds([0,1,2,3]), [0,2])

//using filter method and only passing the even numbers in the function should be sufficient
