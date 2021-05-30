import { assert } from "chai";
import $ from "jquery";

let value = 0;

$(() => {
  // This is executed when running `npm run test-mocha` but not when running
  // `npm run test-jest`.
  value = 1;
});

test("foo", () => {
  assert.equal(value, 1);
});
