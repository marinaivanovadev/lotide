
const countLetters = function(string) {
  const result = {};
  for (const letter of string) {
    //console.log(letter);
    if (letter !== ' ') { // check if letter is not a space
      if (result[letter]) {
        result[letter] += 1; //count all item
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;