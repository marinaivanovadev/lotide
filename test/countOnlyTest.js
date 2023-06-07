const assert = require(`chai`).assert;
const countOnly = require(`../countOnly`);

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  const result1 = countOnly(firstNames, {"Jason": true, "Karims": true, "Fang": true, "Agouhanna": false});
  it(`return Jason 1 time`, () => {
    assert.deepEqual(result1["Jason"], 1);
  });

  it(`return Karima undefined`, () => {
    assert.deepEqual(result1["Karima"], undefined);
  });

  it(`return Fang 2 times`, () => {
    assert.deepEqual(result1["Fang"], 2);
  });
  it(`return Agouhanna undefined`, () => {
    assert.deepEqual(result1["Agouhanna"], undefined);
  });
  
});