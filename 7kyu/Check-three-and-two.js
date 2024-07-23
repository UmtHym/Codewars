// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples

// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {

    let map = {}
  
    for (char of array){
      if(!map.hasOwnProperty(char)){
        map[char] = 1
      } else{
        map[char]++
      }
    }
  
    let hasThree = false;
    let hasTwo = false;
  
    for (let key in map) {
      if (map[key] === 3) {
        hasThree = true;
      }
      if (map[key] === 2) {
        hasTwo = true;
      }
    }
  
    return hasThree && hasTwo;
  }