const assert = require(`chai`).assert;
const findKeyByValue = require(`../findKeyByValue`);
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findkeyByValue", () => {
  it(`return drama for tv show "The Wire"`, () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it(`return undefined for "That '70s Show"`, () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});