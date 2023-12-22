// Write a function that returns whether it was called with the new operator.

// The function must return a Boolean, but due to the way new works, valueOf() will be called on your returned value before strict comparison to true/false.

function wasCalledWithNew() {
    return Boolean();
    }
   wasCalledWithNew.prototype.valueOf = function() {
    return true;
  }