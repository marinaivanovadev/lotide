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

const without = (source, itemsToRemove) => {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {/*if itemsToRemove not present in array */
      newArray.push(source[i]); //add item to new array
      console.log(newArray); // print the new array
    }
  }
  return newArray;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // check that initial array not changed


