const assert = require(`chai`).assert;
const takeUntil = require(`../takeUntil`);

const data1 = [1, 2, 5, 7, 2, -1, 3, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");


const data3 = [10, 20, 30, 40, 50];
const results3 = takeUntil(data3, x => x > 25);

describe("#takeUntil", () => {
  it(`return numbers until < 0`, () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });

  it(`return array until ","`, () => {
    assert.deepEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
  it(`return array until 25`, () => {
    assert.deepEqual(results3, [10, 20]);
  });

});