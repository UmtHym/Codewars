// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}

// Input = {"Peter", "Stephen", "Joe"}
// Output = {}
// Input strings will only contain letters. Note: keep the original order of the names in the output.


function friend(friends){
  
    return friends.filter(name => name.length === 4)
    
  }
  
  //Input is an array of strings, containing names with X letters
  
  //Output is another array containing only the names from the input with 4 letters,
  //in the same order as the input array
  
  //user array filtering based on the string length of each array value.
  //If value length is equal to four, keep value in the array,otherwise
  //filter it out