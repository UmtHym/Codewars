// You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

// Input - {1,2,3,4,5,6} and {9,8,7,6}
// Output - {1,9,2,8,3,7,4,6,5,6}

function compoundArray(a, b) {
  //P: Given two arrays of integers
  //R: A single array with the values of a and b in it staggered

  let min = Math.min(a.length, b.length);
  const resultArray = [];
  //loop over the length of the smaller array
  //this is where we';; zipper merge our array
  for (let i = 0; i < min; i++) {
    resultArray.push(a[i], b[i]);
  }
  console.log(resultArray);
  if (a.length === b.length) return resultArray;
  return a.length > b.length
    ? resultArray.concat(...a.slice(min))
    : resultArray.concat(...b.slice(min));
}
