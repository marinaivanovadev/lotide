// const assertArraysEqual = require(`../assertArraysEqual`);
// const without = require(`../without`);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); // check that initial array not changed

const assert = require(`chai`).assert;
const without = require(`../without`);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

describe("#without", () => {
  
  it("check that initial array not changed", () => {
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});
