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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    for (const letter of sentence) {
      if (letter !== ' ') {
        if (results[letter[i]]) {
          results[letter[i]] += 1; //count all item
        } else {
          results[letter[i]] = 1;
        }
      }
    }
  }
  return results;
};

const test = letterPositions("hello");
console.log(test);
assertArraysEqual(test.e, 1);