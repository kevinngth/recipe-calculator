import calculateMeta from '../src/calculateMeta';

describe("calculateMeta()", () => {
    it("should be a function", () => {
        expect( typeof calculateMeta() ).toBe("object")
    })
})