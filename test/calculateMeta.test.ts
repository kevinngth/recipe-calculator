import calculateMeta from '../src/calculateMeta';

describe("calculateMeta()", () => {
    it("should return an object", () => {
        expect( typeof calculateMeta() ).toBe("object")
    })
})