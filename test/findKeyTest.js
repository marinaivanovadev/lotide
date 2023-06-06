const assertEqual = require(`../assertEqual`);
const findKey = require(`../findKey`);

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