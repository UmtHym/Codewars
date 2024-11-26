// Coding in function sortIt. function accept 1 parameters arr, it's a number array. Your task is to sort the array according to the specified conditions, and returns a new array(should not modify the original array).

// conditions1: according to the number of elements(in ascending order) for example:

// sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
// because [1,1,1,2,2,3] has one 3, two 2 and three 1
// conditions2: If the same number of elements, according to the number values(in descending order) for example:

// sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
// because number of 3,2 and 1 both are three, then according to 3>2>1
// Comprehensive two conditions should be like this:

// sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]

function sortIt(arr){
    return arr.slice().sort((x,y)=>arr.filter(z=>z==x).length-arr.filter(z=>z==y).length || y-x);
  }
  // after slicing the array which makes it a copy of the array which is asked in the kata,
  //we sort it by taking in 2 elements x and y, and we are comparing these elements with other
  //elements and if they are the same than we compare their length and by using - operator like in
  // (a-b) to sort we deduct to arrange in ascending order.(again by their length)
  // in the and we use a binary operator of 'OR' to order the same lengthed elements 
  // in descending order. (This makes the smalles, far right numbers would be the longest
  // and smallest value number and biggest number, far rightest would be the same numbered and 
  // biggest value in same valued one