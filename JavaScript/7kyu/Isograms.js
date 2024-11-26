// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//Solution 1 - Brute Force O(n)

function isIsogram(str){
    if(typeof(str)==='string'){
     
      //check if its Isogram
      let strArr = str.toLowerCase().split('')
      //check copies
      if (strArr.some((el,i)=> strArr.indexOf(el) !== i)){
         return false
       }else{
          return true
        }
    }else {
      return false
    }
   }

//Input - String
//Output - Booelan

//First we check if  the input is a string using typeof method, and
//if the length of the string is greater than 0
//if it is, we loop through the string to see if they are all unique

// Solution 2 - using methods O(n)

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

//Is also possible to use nested loops with time complexity of O(n^2)
