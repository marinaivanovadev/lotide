// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = require(`./eqArrays`);
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // access to keys
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) { // check the length - number of keys
    return false;
  }
  
  for (const key of keys1) { //irritate through kyes
    const valueOne = object1[key];
    const valueTwo  = object2[key];
  
    if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
      if (!eqArrays(valueOne, valueTwo)) {
        return false;
      }
    } else if (valueOne !== valueTwo) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

//if (typeof valueOne === "object" && typeof valueTwo === "object") { // compare type of value
//  if (!eqObjects(valueOne, valueTwo)) {
//    return false;
//  }
//} else {
//  if (valueOne !== valueTwo) { //check the value
//    return false;