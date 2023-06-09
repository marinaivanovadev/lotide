const findKeyByValue = function(object, value) {
  const keys = Object.keys(object); // array of keys from an object
  for (const key of keys) { //irritate through kyes
    if (object[key] === value) { // if find return key
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;