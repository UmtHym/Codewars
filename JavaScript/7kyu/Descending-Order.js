// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//Solution 1
function descendingOrder(n){
  
    return +n.toString().split('').sort((a,b)=> b-a).join('')
    
  }
  
  //input- integer, in order to convert an integer into an array we need to convert it into a string than into an array
  // + at the beggining called unary plus operator which makes it numeric
  //we could use Number() or parseInteger() too
