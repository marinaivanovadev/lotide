// function takeUntil
// the array to work with
// the callback
// return the slice of the array from the begining until callback
// callback one item in the array
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

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;

};

const data1 = [1, 2, 5, 7, 2, -1, 3, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log(`---`);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);

const data3 = [10, 20, 30, 40, 50];
const results3 = takeUntil(data3, x => x > 25);
console.log(results3);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results3, [10, 20]);