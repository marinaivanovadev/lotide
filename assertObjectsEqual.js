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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };
const object3 = { a: '1', b: 3 };
const object4 = { a: 1 , b: 2};

console.log(assertObjectsEqual(object1, object2));
console.log(assertObjectsEqual(object1, object3));
console.log(assertObjectsEqual(object1, object4));
