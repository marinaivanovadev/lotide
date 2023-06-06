// function findKey (object and callback)
// return first key for true callback
// if no return undefined

const findKey = function(object, callback) {
  const keys = Object.keys(object); // array of keys from an object
  //console.log(keys);
  for (const key of keys) { //irritate through kyes
    //console.log(key);
    if (callback(object[key])) { // if find
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;