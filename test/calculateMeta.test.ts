import calculateMeta from '../src/calculateMeta';
import Ingredient from '../src/models/ingredient';
import Recipe from '../src/models/recipe';
import Component from '../src/models/component';
import ingredients from '../data/ingredients';
import chocolatePaste from '../data/chocolatePaste';
import chocolateBatter from '../data/chocolateBatter';

describe("calculateMeta()", () => {
    it("should calculate meta for raw ingredient", () => {
        expect( calculateMeta(ingredients[0]) ).toEqual({cost: 10, weight: 1000, costPerUnit: 10})
    });

    it("should calculate meta for composite ingredient", () => {
        expect( calculateMeta( chocolatePaste ) ).toEqual({cost: null, weight: 1300, costPerUnit: 14})
    });

    it("should calculate meta for complex composite ingredient", () => {
        expect( calculateMeta( chocolateBatter ) ).toEqual({cost: null, weight: 1300, costPerUnit: 26.87})
    });

    it("should calculate meta for complex composite ingredient", () => {
        const chocolateCake = new Ingredient('cake', 'Chocolate Cake', 3000, null, new Recipe('3', [new Component('1', 0, 1300, 1300, chocolatePaste), new Component('2', 0, 1300, 1300, chocolateBatter)]));
        expect( calculateMeta( chocolateCake ) ).toEqual({cost: null, weight: 3000, costPerUnit: 40.87})
    });
});