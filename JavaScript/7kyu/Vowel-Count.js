// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//Bruto force solution
function getCount(str) {
    const vowels = 'aeiou'
    
    let count = 0
    for(let char of str){
      if(vowels.includes(char)){
        count++
      }
    }
    return count
  }

  //One liner solution
  function getCount(str){
    return Array.from(str).filter((char)=> 'aeiou'.includes(char)).length
  }
  //to change str into an array
    //we can use split method 
    //we can do spread operator [..str]
    //we can simply return Array.from(str itl'll convert that into an array)