const assert = require(`chai`).assert;
const eqObjects = require(`../eqObjects`);

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

describe("#eqObjects", () => {
  it(`return true ehen object equal object`, () => {
    assert.deepEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });
  it(`return false when object !equal object`, () => {
    assert.deepEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
  });

  it(`return true when object equal another object which include nested array`, () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  it(`return false when object not equal another object`, () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
  
});