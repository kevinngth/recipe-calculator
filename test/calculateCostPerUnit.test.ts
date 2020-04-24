import calculateCostPerUnit from '../src/calculateCostPerUnit';
import ingredients from '../data/ingredients';
import chocolatePaste from '../data/chocolatePaste';
import chocolateBatter from '../data/chocolateBatter';
import Ingredient from '../src/models/ingredient';
import Recipe from '../src/models/recipe';
import Component from '../src/models/component';

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
        const chocolateCake = new Ingredient('cake', 'Chocolate Cake', 3000, null, new Recipe('3', [new Component('1', 0, 1300, 1300, chocolatePaste), new Component('2', 0, 1300, 1300, chocolateBatter)]));
        expect( calculateCostPerUnit( chocolateCake ) ).toBe( 40.87 );
    })
});