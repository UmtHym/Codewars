// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:

// "It's a fake array"
// If arr contains elements 5 and 13, function should return:

// "It's a black array"
// If arr contains neither 5 nor 13, function should return:

// "It's a white array"

function blackAndWhite(arr){  
    
    if (!Array.isArray(arr)){
        return "It's a fake array"

    }else if(arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1){
        return "It's a black array"
    }else {
        return "It's a white array"
    }
}

//Second Solution
// const blackAndWhite = arr =>`It's a ${!Array.isArray(arr) ? `fake` : arr.includes(5) && arr.includes(13) ? `black` : `white`} array`;