// map function
// two arguments
// an array to map
// a cb function
//return a new array

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
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// first letter of the word in array
const result1 = map(words, word => word[0]);
console.log(result1);

// length of each word
const result2 = map(words, word => word.length);
console.log(result2);
// empty array
const result3 = map([], word => word[0]);
console.log(result3);


assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(result2, [6, 7, 2, 5, 3]);// length of each word
assertArraysEqual(result3, []); // empty array