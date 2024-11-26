function maskify(cc) {
  if(cc.length<=4){
    return cc
  }
  
  let maskSection = '#'.repeat(cc.length-4)
  let lastFour = cc.slice(-4)
  
  return maskSection + lastFour
}

//Inputs can be a string,

//Display only the last for chars/digits of the input, with the rest of the input chars/digits as '#'
//Display the whole unput if < 4 in length

//If input length is less than or equal to 4, return input
//Need to know the length of the section to mask, and print '#'

//and we need to capture the last 4 chars to print, then concat
//the pound sign and last 4 chars , and return