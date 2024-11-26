// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

function mutateMyStrings(stringOne, stringTwo){
    let result = stringOne + '\n'
    
    for (let i = 1; i <= stringTwo.length; i++){
    
      if (stringTwo[i - 1] === ' ' || stringOne[i - 1] === ' ' || stringTwo[i - 1] === stringOne[i - 1]) {
        continue;
      }
        let firstPart = stringTwo.split('').slice(0,i).join('')
        let secondPart = stringOne.split('').slice(i).join('')  
        let snapShot = firstPart + secondPart + '\n'
        result += snapShot
    }
    return result
  }