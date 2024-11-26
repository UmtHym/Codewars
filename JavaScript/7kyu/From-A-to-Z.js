// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

// Examples

// "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
// "h-o" ➞ "hijklmno"
// "Q-Z" ➞ "QRSTUVWXYZ"
// "J-J" ➞ "J"
// Notes

// A hyphen will separate the two letters in the string.
// You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).

function gimmeTheLetters(sp) {
 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
  
    if(alphabet.includes(sp[0].toLowerCase()) && alphabet.includes(sp[2].toLowerCase()) && sp[0] !== sp[2]){
        result = alphabet.split('').slice(alphabet.indexOf(sp[0].toLowerCase()), alphabet.indexOf(sp[2].toLowerCase())+1).join('')
      
      if (sp[0] === sp[0].toUpperCase() && sp[2] === sp[2].toUpperCase()) {
      result = result.toUpperCase()
      }
      
    } else {
        result = sp[0]
      }
    return result
  }