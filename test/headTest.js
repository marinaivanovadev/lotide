const assert = require(`chai`).assert;
const head = require(`../head`);

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '7' for ['7']", () => {
    assert.strictEqual(head(['7']), '7');
  });

  it("return undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("return Hello for arrray [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});

