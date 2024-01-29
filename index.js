// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation, hqLocation = 42) {
	return Math.abs(pickupLocation - hqLocation); 
}

function distanceFromHqInFeet(pickupLocation, hqLocation = 42) {
  // Use distanceFromHqInBlocks to get the number of blocks
  const blocks = distanceFromHqInBlocks(pickupLocation, hqLocation);

  // Convert the number of blocks to feet (assuming each block is 264 feet)
  const feet = blocks * 264;

  return feet;
}

/* Example
const feetDistance = distanceFromHqInFeet(50);
console.log(feetDistance); */


function distanceTravelledInFeet(start, destination) {
  // Calculate the absolute difference between start and destination blocks
  const blocksTraveled = Math.abs(destination - start);

  // Calculate the distance in feet (assuming each block is 264 feet)
  const feetTraveled = blocksTraveled * 264;

  return feetTraveled;
}
/**/
/* Example 
const feetTravelled = distanceTravelledInFeet(10, 15);
console.log(feetTravelled); */

function calculatesFarePrice(start, destination) {
  // Calculate the distance in feet using the distanceTravelledInFeet function
  const distance = distanceTravelledInFeet(start, destination);

  // Calculate the fare based on the given rules
  if (distance <= 400) {
    // The first 400 feet are free
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    // For distance between 400 and 2000 feet, the price is 2 cents per foot (excluding the first 400 feet)
    const fare = (distance - 400) * 0.02;
    return fare;
  } else if (distance > 2000 && distance < 2500) {
    // Scuber charges a flat fare for distance over 2000 feet and under 2500 feet
    return 25;
  } else {
    // Scuber does not allow rides over 2500 feet
    return 'cannot travel that far';
  }
}

/* Example usage:
const fare = calculatesFarePrice(10, 15);
console.log(fare); // This will output the calculated fare for the given distance
*/