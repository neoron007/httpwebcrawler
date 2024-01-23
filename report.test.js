const { sortPages } = require("./report.js");
const { test, expect } = require("@jest/globals");

test("sortPages", () => {
  const input = { "https://sample.dev/path": 1, "https://sample.dev": 3 };
  const actual = sortPages(input);
  const expected = [
    ["https://sample.dev", 3],
    ["https://sample.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});
