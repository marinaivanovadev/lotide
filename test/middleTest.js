const assert = require(`chai`).assert;
const middle = require(`../middle`);

describe("#middle", () => {
  it(`return empty array for an empty array`, () => {
    assert.deepEqual(middle([]), []);
  });

  it(`return empty array for array [1]`, () => {
    assert.deepEqual(middle([1]), []);
  });

  it(`return empty array for array [1, 2]`, () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it(`return 2 for array [1, 2, 3]`, () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it(`return [2, 3] for array [1, 2, 3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it(`return [3, 4] for array [1, 2, 3, 4, 5, 6]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});