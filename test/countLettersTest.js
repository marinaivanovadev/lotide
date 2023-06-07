const assert = require(`chai`).assert;
const countLetters = require(`../countLetters`);

const result = countLetters('lighthouse in the house');

describe("#countLetters", () => {
  
  it(`count letter h and return 4`, () => {
    assert.deepEqual(result["h"], 4);
  });
});