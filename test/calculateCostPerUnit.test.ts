import calculateCostPerUnit from '../src/calculateCostPerUnit';

describe("calculateCostPerUnit()", () => {
    it("should be a function", () => {
        expect( typeof calculateCostPerUnit() ).toBe("number")
    })
})