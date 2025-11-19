import assert from "assert";
import { mergeSort, merge } from "./mergesort.js";

describe("mergeSort / merge ", function () {

  it("mergeSort sorts an unsorted array", function () {
    const arr = [1,8,9,4,6,7,2,5,3];
    const expected = [1,2,3,4,5,6,7,8,9];
    assert.deepStrictEqual(mergeSort(arr), expected);
  });

  it("merge combines two sorted arrays into one sorted array", function () {
    const a = [1,3,7,8];
    const b = [0,2,4,5,6,9];
    assert.deepStrictEqual(merge(a, b), [0,1,2,3,4,5,6,7,8,9]);
  });

  it("mergeSort handles duplicates", function () {
    const arr = [4,2,4,1,4];
    assert.deepStrictEqual(mergeSort(arr), [1,2,4,4,4]);
  });

  it("mergeSort handles empty and single-element arrays", function () {
    assert.deepStrictEqual(mergeSort([]), []);
    assert.deepStrictEqual(mergeSort([42]), [42]);
  });

  it("mergeSort sorts negative and decimal numbers", function () {
    const arr = [3.5, -2, 0, 1.2];
    assert.deepStrictEqual(mergeSort(arr), [-2, 0, 1.2, 3.5]);
  });

  it("merge throws on invalid arguments", function () {
    assert.throws(() => merge([1,2], null), TypeError);
    assert.throws(() => merge(null, [1,2]), TypeError);
  });

  it("mergeSort throws on non-array input", function () {
    assert.throws(() => mergeSort(null), TypeError);
    assert.throws(() => mergeSort("not an array"), TypeError);
  });

  

});