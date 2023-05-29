// function findKey (object and callback)
// return first key for true callback
// if no return undefined


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

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

const stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const result1 = findKey(stars, x => x.stars === 2);
console.log(result1);
const result2 = findKey(stars, x => x.stars === 4); // the stars doesnt exist
console.log(result2);
assertEqual(result1, "noma");
assertEqual(result2, undefined);