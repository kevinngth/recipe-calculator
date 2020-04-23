import calculateCostPerUnit from '../src/calculateCostPerUnit';

describe("calculateCostPerUnit()", () => {
    it("should return a number", () => {
        expect( typeof calculateCostPerUnit() ).toBe("number");
    })
})