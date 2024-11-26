String.prototype.toJadenCase = function () {
    if (typeof this !== "string") {
       this.toString(); 
     }
     let newStr = this.split(' ')
     for(let i=0; i<newStr.length; i++){
       newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1)
        
     }
     return newStr.join(' ')
   };
   
   //params - string, no symbols, no empty strings,
   //return - string with every words first letter capitalised
   
   //console.log(toJadenCase('How can mirrors be real if our eyes aren't real'), 'How Can Mirrors Be Real If Our Eyes Aren't Real')
   
   //check if the params is a string and if not convert it to one,
   //convert string into array of string
   //We loop through each string and replace each word with concatenation of capitalized first letter and
   //the rest of the word using slice method
   //we convert the array back into single string and return it
   
   // for a shorter code
   String.prototype.toJadenCase = function (string) {
         if (typeof this !== "string") {
       this.toString(); 
     }
     return string.split(' ').map((word)=> word[0].toUpperCase() + word.split(1)).join(' ')  
   }