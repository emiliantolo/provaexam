let getArea = require ("./getArea")

test("Array length>2", () => {
    expect(getArea([1, 2, 3])).toBe(-1)
})
test("Array length<2", () => {
    expect(getArea([1])).toBe(-1)
})
test("Not integer first", () => {
    expect(getArea(["1", 2])).toBe(-1)
})
test("Not integer second", () => {
    expect(getArea([1, "2"])).toBe(-1)
})
test("First<0", () => {
    expect(getArea([-1, 2])).toBe(-1)
})
test("Second<0", () => {
    expect(getArea([1, -1])).toBe(-1)
})
test("First=0", () => {
    expect(getArea([0, 1])).toBe(0)
})
test("Second=0", () => {
    expect(getArea([0, 1])).toBe(0)
})
test("Normal", () => {
    expect(getArea([5, 3])).toBe(15)
})
