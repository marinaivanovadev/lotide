const assert = require(`chai`).assert;
const tail = require(`../tail`);

const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);

describe("#tail", () => {
  
  it(`return ["Lighthouse", "Labs"] for array ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(result,  ["Lighthouse", "Labs"]);
  });

  it(`return first element in a tail array ["Lighthouse", "Labs"]`, () => {
    assert.deepEqual(result[0],  "Lighthouse");
  });

  it(`return second element in a tail array ["Lighthouse", "Labs"]`, () => {
    assert.deepEqual(result[1],  "Labs");
  });

  
  it(`return back two elements from array ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(words.length,  2);
  });

  it(`return empty array for an empty array`, () => {
    const emptyArray = [];
    const emptyArrayTail = tail(emptyArray);
    assert.deepEqual(emptyArray, []);
    assert.deepEqual(emptyArrayTail, []);
  });

  it(`return empty array for an array with One element`, () => {
    const oneElement = ["Hello"];
    const oneElementTail = tail(oneElement);
    assert.deepEqual(oneElement, ["Hello"]);
    assert.deepEqual(oneElementTail, []);
  });
});
