// Coding in function rndCode. Your task is to generate a random verification code. In accordance with the following rules:

// the code length should be 8;

// The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

// The 3rd-6th characters should be four numbers.

// the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

// If Your code runs 100 times, It should generate 100 non duplicate verification codes.

function rndCode() {
    let result = [];
  
    for (let i = 0; i < 8; i++) {
      if (i <= 1) {
        const chars = "ABCDEFGHIJKLM";
        result.push(chars[~~(chars.length * Math.random())]);
      } else if (i === 2 || i === 5) {
        result.push(~~(90 * Math.random()) + 10)
      } else if (i === 6 || i === 7) {
        const symbols = "~!@#$%^&*";
        result.push(symbols[~~(symbols.length * Math.random())]);
      }
    }
  
    return result.join('');
  }