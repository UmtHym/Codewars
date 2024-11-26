// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    let newStr =''
  for (let i=0; i<str.length; i++){
    newStr += str[i] + str[i]
    }
    return newStr
  }
  
  //or

  function doubleChar(str) {
    let newArr = str.split('')
    return newArr.map(el => el = el+el).join('')
  }