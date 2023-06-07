const assert = require(`chai`).assert;
const eqArrays = require(`../eqArrays`);

describe("#eqArrays", () => {
  it(`return true - array with numbers equals array`, () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it(`return false - if array no equals array`, () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it(`return true if array with strings equals array with strings`, () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it(`return false if array no equals array`, () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  
});
