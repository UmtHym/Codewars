// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5); // should return "Value is 00005"

//Brute Force

function solution(value) {
  let n = value.toString().split("").map(Number);
  let emptyArr = ["0", "0", "0", "0", "0"];

  for (let i = 4; i >= 0; i--) {
    if (n.length === 0) {
      break;
    }
    emptyArr[i] = n[n.length - 1].toString();
    n.pop();
  }
  let result = emptyArr.join("");

  return `Value is ${result}`;
}
