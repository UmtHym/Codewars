// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let newStr = s.split('')
    for (let i=0; i<n-1 ; i++){
       newStr.push(s)
    }
    return newStr.join('')
  }