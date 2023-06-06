// function takeUntil
// the array to work with
// the callback
// return the slice of the array from the begining until callback
// callback one item in the array


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

module.exports = takeUntil;