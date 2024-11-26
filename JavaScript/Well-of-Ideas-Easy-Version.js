// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    let counts = 0
      for (let i = 0 ; i< x.length; i++){ 
        if(x[i] === 'good'){
         counts++
        }
       }
      
        if(counts === 1 || counts === 2){
          return 'Publish!'
        } else if (counts > 2){
          return 'I smell a series!'
        } else {
          return 'Fail!'
        }
    }

    // Second time for clearer syntax

    let well = (x) => {
      let result = !(x.includes('good')) ? 'Fail!' : (x.filter(el => el === 'good')).length <= 2 ? 'Publish!' : 'I smell a series!'
       return result
       }