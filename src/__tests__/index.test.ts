import { sum, multiply } from "..";

test("sum", () => {
  expect(sum(1, 2)).toBe(3);
});

test("multiply", () => {
  expect(multiply(2, 3)).toBe(6);
});
