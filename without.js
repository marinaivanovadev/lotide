const without = (source, itemsToRemove) => {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {/*if itemsToRemove not present in array */
      newArray.push(source[i]); //add item to new array
      //console.log(newArray); // print the new array
    }
  }
  return newArray;
};

module.exports = without;
