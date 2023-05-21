
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

const assertArrayEqual = (arrayOne, arrayTwo) => {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 ${arrayOne} !== ${arrayTwo}`);
  }
};
assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual(["1", "2", "3"], [1, 2, 3]);
