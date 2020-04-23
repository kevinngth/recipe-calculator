import calculateCostPerUnit from '../src/calculateCostPerUnit';
import ingredients from '../data/ingredients';

describe("calculateCostPerUnit()", () => {
    it("should return a number", () => {
        expect( typeof calculateCostPerUnit( ingredients[1] ) ).toBe("number");
    })
})