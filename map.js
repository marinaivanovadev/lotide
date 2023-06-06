// map function
// two arguments
// an array to map
// a cb function
//return a new array


const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;