const assert = require(`chai`).assert;
const findKey = require(`../findKey`);


const stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("#findkeyByValue", () => {
  it(`return noma for stars 2`, () => {
    assert.deepEqual(findKey(stars, x => x.stars === 2), "noma");
  });

  it(`return undefined if stars do not exist"`, () => {
    assert.deepEqual(findKey(stars, x => x.stars === 4), undefined);
  });
});