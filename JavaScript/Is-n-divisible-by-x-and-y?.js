// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

// function isDivisible(n, x, y) {
//   if(n % x === 0 && n % y === 0){
//     return true;
//   }
//   return false;
// }

//inputs are going to be always positive and > 0,
//three inputs : n is being divided and x and y being divisors, (integers),
//result is a boolean,
//result is true if the n is divisible by both x and y with no remainder,
//result is false if n is divisible by only one of them or neither,
//use modulus to check if is divisible by x and y and make conditionals around that

//for shorthand

let isDivisible = (n, x, y) => n % x ===0 && n % y ===0
