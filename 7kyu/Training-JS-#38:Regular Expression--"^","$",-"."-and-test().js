// Coding in function findSimilarity. function accept two parameters: str, a sentence contains some words, separated by spaces; word, a sample word.

// Your task is to keep the words that are similar to the sample word, and to remove the other words.

// The similarity is defined as: the same length as the sample; the letter at the beginning and the end of word are same as the sample too.

// If there are no similar words in the sentence, should return an empty string.

// Examples

// findSimilarity("bag dog dig dot doog dogs","dog") should return "dog dig"
// findSimilarity("bag dog dig dot doog dogs","dig") should return "dog dig"
// findSimilarity("bag dog dig dot doog dogs","dot") should return "dot"
// findSimilarity("bag dog dig dot doog dogs","god") should return ""



const findSimilarity = (str, word) => {
    const regStr = word
      .replace(/./g, '.')
      .replace(/^./, word[0])
      .replace(/.$/, word.slice(-1))
    const reg = new RegExp(`^${regStr}$`)
  
    return str
      .split(/ /)
      .filter(val => reg.test(val))
      .join(' ')
  }
  
 // Second Solution
function findSimilarity(str,word){
    let newStr = ""
    let newArray = str.split(" ")
    
    for (let i = 0; i<newArray.length; i++){
      
      if(newArray[i].length === word.length && newArray[i][0] === word[0] && newArray[i].slice(-1) === word.slice(-1)){
        newStr += newArray[i] + " ";
        }
      }
      return newStr.trim()
    }

   
    