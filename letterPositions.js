const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {// show index

    const letter = sentence[i];
    if (letter !== ' ') { // check spaces
      
      if (results[letter]) {
        results[letter].push(i); //add to array
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;