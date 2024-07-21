// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//Solution number 1
function getMiddle(s){
  
    const length = s.length
    const middleIndex = Math.floor(length/2)
    
    //if odd, return char at the middle index
    
    if(length % 2 ===1) {
      return s.charAt(middleIndex)
      
    }else {
    // if even, return substring of two vals at middle
      
      return s.substring(middleIndex -1, middleIndex +1)
      }
    
  }

//Solution number 2 (One liner)
function getMiddle(s){
    return s.slice((s.length-1)/2, s.length/2+1)
  }

//keep in mind that slice second param is not inclusive and it automatically floors the float numbers