
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
    return [array[Math.floor(middleElement)]]; //odd array return one element; math floor index of the middle element
  } else {
    return [array[middleElement - 1], array[middleElement]]; // even array two elements
  }
};

module.exports = middle;