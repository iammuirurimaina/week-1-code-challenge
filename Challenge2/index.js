//define a function to check the drivers speed against the speed
function detectSpeed(speed) {
    const speedLimit = 70;//sets the speed limit
  
    if (speed < speedLimit) {//print out "Ok" if the driver travels under the speed limit
      return "Ok";
    }
    //if the driver is driving above the speed limit, call the calculateDemeritPoints function to calculate how many points they have accumulated
  
    const points = calculateDemeritPoints(speed, speedLimit);
  
    if (points > 12) {//suspends the driver's license when they exceed 12 drivers points
      return "license has been suspended";
    }
    //if the driver's points are below 12, return the ir speed and number of points as a message
  
    return `The driver was travelling at ${speed} km/h and therefore has accumulated ${points} demerit points`; 
  }
  
  //This function calculates the demerits points and returns the result to the detectSpeed function 
  function calculateDemeritPoints(speed, speedLimit) {
    const kmsPerPoint = 5; // for every 5kmph over the speed limit, add one demerit point
  
    //calculate how much the driver overspeeds and divide the differece by 5 to get their demerit points 
    const demeritPoints = Math.floor((speed - speedLimit) / kmsPerPoint); //rounds down the result to get the number of demerit points as a whole number
  
    return demeritPoints;
  }
  
 //calling and executing the detectSpeed function
  const carSpeed = prompt("What is the Driver's speed?");//prompts the user to enter the driver's speed and stores it the carSpeed variable
  const detectorResult = detectSpeed(parseFloat(carSpeed));// calls and executes detectSpeed and with the inputted drivers speed parsed as a float and stores it in the detectorResult variable
  console.log(detectorResult);//prints out the speed and demerit points Message