// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna){
  
    const complements = {
      'A' : 'T',
      'T' : 'A',
      'C' : 'G',
      'G' : 'C'
    }
    
    return dna.split('').map(letter => complements[letter]).join('')
    
  }
  
  //Inputs are going to be strings with capital letters, never going to be empty
  //Output is going to be a string with capital letters, same length as the input,
  //containing the complementary values to the input string,
  
  //set up a dictionary of lookup values and loop through the input returning 
  //the complementary value from the each lookup