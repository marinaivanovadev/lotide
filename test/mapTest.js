const assertArraysEqual = require(`../assertArraysEqual`);
const map = require(`../map`);

const words = ["ground", "control", "to", "major", "tom"];

// first letter of the word in array
const result1 = map(words, word => word[0]);
console.log(result1);

// length of each word
const result2 = map(words, word => word.length);
console.log(result2);
// empty array
const result3 = map([], word => word[0]);
console.log(result3);


assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(result2, [6, 7, 2, 5, 3]);// length of each word
assertArraysEqual(result3, []); // empty array