// Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

// ALF has the technology to bring the spaceship home if he can lock on to its location.

// Given a map:

// ..........
// ..........
// ..........
// .......X..
// ..........
// ..........
// The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

// In this example:

// findSpaceship(map) => [7, 2]
// If you cannot find the spaceship, the result should be

// "Spaceship lost forever."

function findSpaceship(map = '') {
  
    map = map.split("\n").reverse()
     
     for(let row = 0; row < map.length; row++){
       for(let column = 0; column < map[row].length; column++){
         if(map[row][column]==='X') return [column,row]
         }
       }
       return'Spaceship lost forever.'
     }

    //to log the map, implement in the beggining

    //   let lines = map.split("\n")
    //   lines.forEach(line=> console.log(line) )