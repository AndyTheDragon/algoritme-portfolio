import assert from "assert";
import shuffle from "./fisheryates.js";

describe("Fisher-Yates shuffle", function () {

  it("preserves length and elements (simple array)", function () {
    const original = [1,2,3,4,5];
    const copy = original.slice();
    const result = shuffle(copy);
    // same multiset of elements
    assert.deepStrictEqual(result.slice().sort((a,b) => a - b), original.slice().sort((a,b) => a - b));
    // length preserved
    assert.strictEqual(result.length, original.length);
  });

  it("handles duplicates correctly", function () {
    const original = [1,1,2,2,3];
    const copy = original.slice();
    const result = shuffle(copy);
    assert.deepStrictEqual(result.slice().sort((a,b) => a - b), original.slice().sort((a,b) => a - b));
    assert.strictEqual(result.length, original.length);
  });

  it("returns empty array for empty input", function () {
    const arr = [];
    const res = shuffle(arr);
    assert.deepStrictEqual(res, []);
  });

  it("returns same single-element array", function () {
    const arr = [42];
    const res = shuffle(arr);
    assert.deepStrictEqual(res, [42]);
  });

  it("usually changes order after multiple shuffles", function () {
    // run several shuffles and assert at least one differs from original order
    const original = [1,2,3,4,5,6,7,8,9,10];
    let foundDifferent = false;
    const attempts = 20;
    for (let i = 0; i < attempts; i++) {
      const copy = original.slice();
      shuffle(copy);
      if (!copy.every((v, idx) => v === original[idx])) {
        foundDifferent = true;
        break;
      }
    }
    assert.strictEqual(foundDifferent, true, `Expected at least one shuffle (of ${attempts}) to change order`);
  });

});