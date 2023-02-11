import range from "./range";

describe('range helper function', () => {
    it('returns the correct range', () => {
        expect(range(2, 5)).toEqual([2, 3, 4, 5]);
    })

    it("return empty array if passed invalid arguments", () => {
        expect(range('a', 5)).toEqual([]);
        expect(range(3, '0')).toEqual([]);
        expect(range('d', 'a')).toEqual([]);
    })
})