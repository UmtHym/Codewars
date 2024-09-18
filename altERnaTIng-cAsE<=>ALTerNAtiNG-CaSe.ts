// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// toAlternatingCase("hello world") === "HELLO WORLD"
// toAlternatingCase("HELLO WORLD") === "hello world"
// toAlternatingCase("hello WORLD") === "HELLO world"
// toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
// toAlternatingCase("12345")       === "12345"                   // Non-alphabetical characters are unaffected
// toAlternatingCase("1a2b3c4d5e")  === "1A2B3C4D5E"
// toAlternatingCase("String.prototype.toAlternatingCase") === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

//Brute Force Solution

export function toAlternatingCase(s: string): string {
    let strArr: string[] = s.split('')
    for(let i=0; i < strArr.length; i++){
      if(strArr[i] === strArr[i].toUpperCase()){
        strArr[i] = strArr[i].toLowerCase()
      }else{
         strArr[i] = strArr[i].toUpperCase() 
        }
    }
      return strArr.join('')
  }

  // DRY, method solution

  export function toAlternatingCase(s: string): string {
    return s.split("").map(e => e === e.toUpperCase()? e.toLowerCase(): e.toUpperCase()).join('')
  }