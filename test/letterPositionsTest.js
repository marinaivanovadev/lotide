
const assert = require(`chai`).assert;
const letterPositions = require(`../letterPositions`);

const test1 = letterPositions('hello');
const test2 = letterPositions('web developement');

describe("#letterPositions", () => {
  it(`return e from word hello`, () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it(`return letters from word hello`, () => {
    assert.deepEqual(test1['h'], [0]);
    assert.deepEqual(test1['e'], [1]);
    assert.deepEqual(test1['l'], [2, 3]);
    assert.deepEqual(test1['o'], [4]);
  });
  it(`return letters from word "web developement"`, () => {
    assert.deepEqual(test2['w'], [0]);
    assert.deepEqual(test2['e'], [1, 5, 7, 11, 13]);
    assert.deepEqual(test2['b'], [2]);
    assert.deepEqual(test2['d'], [4]);
    assert.deepEqual(test2['v'], [6]);
    assert.deepEqual(test2['l'], [8]);
    assert.deepEqual(test2['o'], [9]);
    assert.deepEqual(test2['p'], [10]);
    assert.deepEqual(test2['m'], [12]);
    assert.deepEqual(test2['n'], [14]);
    assert.deepEqual(test2['t'], [15]);
  });

});
