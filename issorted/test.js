import assert from "assert";
import isSorted from "./issorted.js";

describe("isSorted", function () {

  it("returns true for [1,2,3,4,5,6,7,8,9]", function () {
    assert.strictEqual(isSorted([1,2,3,4,5,6,7,8,9]), true);
  });

  it("returns true for [1,2,4,5,7,9,11]", function () {
    assert.strictEqual(isSorted([1,2,4,5,7,9,11]), true);
  });

  it("returns true for [2,2,3,6,8,9,9,10,10,11,12]", function () {
    assert.strictEqual(isSorted([2,2,3,6,8,9,9,10,10,11,12]), true);
  });

  it("returns false for [9,8,7,6,5,4,3,2,1]", function () {
    assert.strictEqual(isSorted([9,8,7,6,5,4,3,2,1]), false);
  });

  it("returns false for [1,8,9,4,6,7,2,5,3]", function () {
    assert.strictEqual(isSorted([1,8,9,4,6,7,2,5,3]), false);
  });

  it("returns false for [1,2,4,4,5,3,6,7,8]", function () {
    assert.strictEqual(isSorted([1,2,4,4,5,3,6,7,8]), false);
  });

  it("returns true for [4,4,4,4,4,4,4]", function () {
    assert.strictEqual(isSorted([4,4,4,4,4,4,4]), true);
  });

  it("returns false for [2,3,5,4]", function () {
    assert.strictEqual(isSorted([2,3,5,4]), false);
  });

});