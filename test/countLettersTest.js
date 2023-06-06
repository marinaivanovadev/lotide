const assertEqual = require(`../assertEqual`);
const countLetters = require(`../countLetters`);


const result = countLetters('lighthouse in the house');
console.log(result);
assertEqual(result["h"], 4);