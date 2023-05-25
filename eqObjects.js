const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) { /*check the length*/
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) { /*check each element*/
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
      if (!eqArrays (valueOne, valueTwo)) {
        return false;
      }
    } else if (valueOne !== valueTwo) {
      return false;
    }
    //if (typeof valueOne === "object" && typeof valueTwo === "object") { // compare type of value
    //  if (!eqObjects(valueOne, valueTwo)) {
    //    return false;
    //  }
    //} else {
    //  if (valueOne !== valueTwo) { //check the value
    //    return false;
      
    
  }
  return true;
};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
