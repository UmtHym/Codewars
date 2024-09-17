// Create a function (a method in Ruby, an extension method in C#) every which returns every nth element of an array.

// Usage

// With one argument, every(array) returns every element of the array.

// With two arguments, every(array, interval) it returns every intervalth element.

// With three arguments, every(array, interval, start_index) returns every intervalth element starting at index start_index.

function every(arr, interval=1, start=0){
  
    let arr2 = arr.slice(start)
    let newArr = []
    
    for(let i=0; i<arr2.length; i+=interval){
      newArr.push(arr2[i])  
    }
    return newArr
  }
  
  //input - an array, a number(interval), and another number for index
  
  //Output - an array
  
  //console.log(every([0,1,2,3,4]),[0,1,2,3,4])
  //console.log(every([0,1,2,3,4],1),[0,1,2,3,4])
  //console.log(every([0,1,2,3,4],2),[0,2,4])
  