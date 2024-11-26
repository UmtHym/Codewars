// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!



function testit(s) {
  let result = [];
  let sArr = s.split(/\s+/);
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sArr[i].length; j++) {
      if (j === sArr[i].length - 1) { // Only modify the last character of each word
        if (/[a-zA-Z]/.test(sArr[i][j]) && sArr[i][j] === sArr[i][j].toLowerCase()) {
          result.push(sArr[i][j].toUpperCase());
        } else if (/[a-zA-Z]/.test(sArr[i][j]) && sArr[i][j] === sArr[i][j].toUpperCase()) {
          result.push(sArr[i][j].toLowerCase());
        } else {
          result.push(sArr[i][j]);
        }
      } else {
        result.push(sArr[i][j]);
      }
    }
    if (i < sArr.length - 1) {
      result.push(" ");
    }
  }
  return result.join('').trim();
}