
const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 ${arrayOne} !== ${arrayTwo}`);
  }
};


// Implement middle which will+
// - take in an array  +
// - return the middle-most element(s) of the given array.+
//  - For arrays with one or two elements, there is no middle. Return an empty array. +
// - For arrays with odd number of elements, an array containing a single middle element should be returned. +
// - For arrays with an even number of elements, an array containing the two elements in the middle should be returned +
// - Write test assertions for the various scenarios with middle +
// - We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with. +

const middle = function(array) {
  const middleElement = array.length / 2;
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[Math.floor(middleElement)]]; //odd array return one element
  } else {
    return [array[middleElement - 1], array[middleElement]]; // even array two elements
  }
};

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);