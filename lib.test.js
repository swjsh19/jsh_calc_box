const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("fact([5]) should be 0", () => {
    expect(lib.fact([5])).toBe(120);
});

test("fact([7]) should be 0", () => {
    expect(lib.fact([7])).toBe(5040);
});


test("prime([7]) should be 0", () => {
    expect(lib.prime([7])).toBe(true);
});


test("prime([1]) should be 0", () => {
    expect(lib.prime([1])).toBe(false);
});


test("prime([2]) should be 0", () => {
    expect(lib.prime([2])).toBe(true);
});
