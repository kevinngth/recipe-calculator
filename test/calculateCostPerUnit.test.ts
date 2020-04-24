import calculateCostPerUnit from '../src/calculateCostPerUnit';
import ingredients from '../data/ingredients';
import chocolatePaste from '../data/chocolatePaste';
import chocolateBatter from '../data/chocolateBatter';

describe("calculateCostPerUnit()", () => {
    it("should calculate cost for raw ingredient", () => {
        expect( calculateCostPerUnit( ingredients[1] ) ).toBe( 0 );
    })

    const costPerUnitChocolatePaste = (): number => {
        let result: number = 0;
        chocolatePaste.recipe.madeWith.forEach(ingredient => {
            const {amt, ingredient: {cost, weight}} = ingredient;
            result += amt * cost / weight;
        });
        return result;
    }

    it("should calculate cost for a recipe", () => {
        expect( calculateCostPerUnit( chocolatePaste ) ).toBe( costPerUnitChocolatePaste() );
    })

    it("should calculate cost for a product", () => {
        let result: number = 0;
        chocolateBatter.recipe.madeWith.forEach(ingredient => {
            if (ingredient.id === '1') {
                result += ingredient.amt * costPerUnitChocolatePaste() / ingredient.ingredient.weight;
            } else {
                const {amt, ingredient: {cost, weight}} = ingredient;
                result += amt * cost / weight;
            }
        });
        expect( calculateCostPerUnit( chocolateBatter ) ).toBe( result );
    })
});