import assert from "assert";
import { exprCalculator } from "./shuntingyard.js";

describe("Shunting Yard - exprCalculator", function () {

  describe("basic operations", function () {
    it("adds 3 and 4 => 7", function () {
      const result = exprCalculator("3 + 4");
      assert.strictEqual(result, 7);
    });

    it("handles extra spaces: ' 3    + 4 ' => 7", function () {
      const result = exprCalculator(" 3    + 4 ");
      assert.strictEqual(result, 7);
    });

    it("complex expression => 14", function () {
      // 5 + (1 + 2) * 4 - 3 => 14
      const result = exprCalculator("5 + ( 1 + 2 ) * 4 - 3");
      assert.strictEqual(result, 14);
    });
  });

  describe("individual operators", function () {
    it("addition: 10 + 5 => 15", function () {
      const result = exprCalculator("10 + 5");
      assert.strictEqual(result, 15);
    });

    it("subtraction: 10 - 5 => 5", function () {
      const result = exprCalculator("10 - 5");
      assert.strictEqual(result, 5);
    });

    it("multiplication: 6 * 7 => 42", function () {
      const result = exprCalculator("6 * 7");
      assert.strictEqual(result, 42);
    });

    it("division: 8 / 2 => 4", function () {
      const result = exprCalculator("8 / 2");
      assert.strictEqual(result, 4);
    });

    it("exponent: 2 ^ 3 => 8", function () {
      const result = exprCalculator("2 ^ 3");
      assert.strictEqual(result, 8);
    });

    it("exponent chain (right-associative): 3 ^ 2 ^ 2 => 81", function () {
      const result = exprCalculator("3 ^ 2 ^ 2");
      assert.strictEqual(result, 81);
    });
  });

  describe("edge cases / invalid input (current implementation behaviour)", function () {
    it("invalid token returns null", function () {
      const result = exprCalculator("3 & 4");
      assert.equal(result, null);
    });

    it("missing operator between numbers returns null", function () {
      const result = exprCalculator("3 4");
      assert.equal(result, null);
    });

    it("single operator with no operands returns null", function () {
      const result = exprCalculator("+");
      assert.equal(result, null);
    });

    it("division by zero returns Infinity", function () {
      const result = exprCalculator("4 / 0");
      assert.equal(result, Infinity);
    });
  });

  describe("negative and decimal numbers", function () {
    it("(-3)^2 => 9", function () {
      const result = exprCalculator("-3 ^ 2");
      assert.strictEqual(result, 9);
    });

    it("3.5 * 2 => 7", function () {
      const result = exprCalculator("3.5 * 2");
      assert.strictEqual(result, 7);
    });
  });

});
