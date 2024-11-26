// Coding in function tailAndHead. function accept 1 parameter arr(a number array).

// We use an example to explain this task:

// You got an array [123,456,789,12,34,56,78].

// First, from left to right, the tail of an element and the head of the next element are added together. The results are put into an array. like this:

// [123,456,789,1 2,3 4,5 6,78]
//    3+4 6+7 9+1 2+3 4+5 6+7  
//     |   |   |   |   |   |
//    [7 ,13 ,10 , 5 , 9 ,13]
// And then, Calculate their product and return it(7x13x10x5x9x13=532350)

// So, tailAndHead([123,456,789,12,34,56,78]) should return 532350 

// All elements of arr are positive integer. If a number is less than 10, its head and tail are the same. Please try to use reduce() solve this kata.

// Examples

// tailAndHead([1,2,3,4,5]) should return 945
// tailAndHead([111,2345,66,78,900]) should return 7293
// tailAndHead([35456,782,569,2454,875]) should return 12012


//**** Solution Number 1 ****
function tailAndHead(arr){
    prod = 1;

    arr.reduce((prev,curr) => { 
    s1 = prev.toString()
    s2 = curr.toString()
    prod *= parseInt(s1[s1.length-1]) + parseInt(s2[0])
    return curr})

    return prod
}
//Two major things. First is to be able to target the indexes of an array 
//element we need to convert them to strings then select their idexed values.
// Second improtant thing is the reduce() method always returns acc (the first parameter)
//but in the end if you return the second parameter, it will not accumulate and here we are simply 
//accumulating by using an out of scope varibale to continue the addition without compounding


//**** Solution Number 2 ****
function tailAndHead(arr){
    multiply = 1;

    arr.reduce((a,b) => { 
    s1 = a.toString()
    s2 = b.toString()
    multiply *= parseInt(s1[s1.length-1]) + parseInt(s2[0])
      
    return b})

    return multiply
  }