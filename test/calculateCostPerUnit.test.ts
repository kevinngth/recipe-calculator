import calculateCostPerUnit from '../src/calculateCostPerUnit';
import ingredients from '../data/ingredients';
import chocolatePaste from '../data/chocolatePaste';
import chocolateBatter from '../data/chocolateBatter';

describe("calculateCostPerUnit()", () => {
    it("should calculate cost for raw ingredient", () => {
        expect( calculateCostPerUnit( ingredients[1] ) ).toBe( 0 );
    })

    it("should calculate cost for a recipe", () => {
        expect( calculateCostPerUnit( chocolatePaste ) ).toBe( 14 );
    })

    it("should calculate cost for a product", () => {
        expect( calculateCostPerUnit( chocolateBatter ) ).toBe( 26.87 );
    })

    it("should calculate cost of chocolate cake", () => {
        expect( calculateCostPerUnit( chocolateCake ) ).toBe( 30.87 );
    })
});