// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {}; //  define a new empty object
  for (const item of allItems) { //oop over all the items in the array
    if (itemsToCount[item]) { // is found in the itemsToCount object
      if (results[item]) {
        results[item] += 1; //count all item
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;