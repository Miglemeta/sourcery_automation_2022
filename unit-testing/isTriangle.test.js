const isTriangle = require("./isTriangle");

test("3, 4, 5 is triangle", () => {
  expect(isTriangle(3, 4, 5)).toBe(true);
});
test("0, -2, 5 is triangle", () => {
  expect(isTriangle(0, -2, 5)).toBe(true);
});
test("0, 0, 0 is triangle", () => {
  expect(isTriangle(0, 0, 0)).toBe(true);
});
test("1, 1, 2 is triangle", () => {
  expect(isTriangle(1, 1, 2)).toBe(true);
});
test("a, b, c is triangle", () => {
  expect(isTriangle(a, b, c)).toBe(true);
});
test("0, -2, 5 is triangle", () => {
  expect(isTriangle(0, -2, 5)).toBe(true);
});
