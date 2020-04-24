import calculateCostPerUnit from '../src/calculateCostPerUnit';
import ingredients from '../data/ingredients';
import chocolatePaste from '../data/chocolatePaste';

describe("calculateCostPerUnit()", () => {
    it("should calculate cost for raw ingredient", () => {
        expect( calculateCostPerUnit( ingredients[1] ) ).toBe( 0 );
    })

    it("should calculate cost for a recipe", () => {
        let result: number = 0;
        chocolatePaste.recipe.madeWith.forEach(ingredient => {
            const {amt, ingredient: {cost, weight}} = ingredient;
            result += amt * cost / weight;
        });
        expect( calculateCostPerUnit( chocolatePaste ) ).toBe( result );
    })
})