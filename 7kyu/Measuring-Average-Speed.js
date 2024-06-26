// Speed is a crucial measure of success for any aspiring warrior, so let's write a function to calculate it.

// Average Speed is calculated by dividing distance by time. Given two strings as input the first of which indicates a codewarrior's distance travelled (in metres or kilometres) and the second indicating the time it takes them to travel (in seconds or minutes), return a string indicating their speed in miles per hour rounded to the nearest integer.

// For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

// So for example given the input values of distance & time "3km" and "5min" we should return a speed value of "22mph".

function calculateSpeed(distance, time) {
    let newDistance, newTime; 
  
    if (distance.slice(-2) === 'km') {
        newDistance = parseFloat(distance.slice(0, -2)) * 1000; 
    } else if (distance.slice(-1) === 'm') {
        newDistance = parseFloat(distance.slice(0, -1)); 
    } else {
        return "Invalid input";
    }

    if (time.slice(-3) === 'min') {
        newTime = parseFloat(time.slice(0, -3)) * 60;
    } else if (time.slice(-1) === 's') {
        newTime = parseFloat(time.slice(0, -1)); 
    } else {
        return "Invalid input";
    }

    let speed = Math.round((newDistance / newTime) * 2.23694);

    return `${speed}mph`;
}