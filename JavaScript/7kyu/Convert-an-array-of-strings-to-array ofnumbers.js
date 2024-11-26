// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray){

    let nums = []
  
    for (let el of stringarray){
      nums.push(parseFloat(el))
    }
    return nums
  }
  
  // Input - Array of Strings that represent numbers, we have floats, no negative numbers
  // Output - array of Integers
  //console.log(toNumberArray(['1.1','2.2','3.3']),[1.1, 2.2, 3.3])
  //we create an empty array
  //we loop through the array of strings and for each number we use parseInteger method and push it to the empty array