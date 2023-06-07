const assert = require(`chai`).assert;
const map = require(`../map`);

const words = ["ground", "control", "to", "major", "tom"];


describe("#map", () => {
  it(`return first letter of the word in array`, () => {
    const result1 = map(words, word => word[0]);
    assert.deepEqual(result1, ['g', 'c', 't', 'm', 't']);
  });

  it(`return length of each word`, () => {
    const result2 = map(words, word => word.length);
    assert.deepEqual(result2, [6, 7, 2, 5, 3]);
  });

  it(`return empty array`, () => {
    
    assert.deepEqual(map([], word => word[0]), []);
  });

});