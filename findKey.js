const findKey = function(object, callback) {
  const keys = Object.keys(object); // array of keys from an object
  for (const key of keys) { //irritate through kyes
    if (callback(object[key])) { // if find
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;