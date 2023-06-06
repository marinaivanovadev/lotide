const findKeyByValue = function(object, value) {
  const keys = Object.keys(object); // array of keys from an object
  //console.log(keys);
  for (const key of keys) { //irritate through kyes
    //console.log(key);
    if (object[key] === value) { // if find
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;