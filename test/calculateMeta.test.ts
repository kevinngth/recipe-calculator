import calculateMeta from '../src/calculateMeta';
import ingredients from '../data/ingredients';
import chocolatePaste from '../data/chocolatePaste';
import chocolateBatter from '../data/chocolateBatter';

describe("calculateMeta()", () => {
    it("should calculate meta for raw ingredient", () => {
        expect( calculateMeta(ingredients[0]) ).toEqual({cost: 10, weight: 1000, costPerUnit: 10})
    })

    it("should calculate meta for composite ingredient", () => {
        expect( calculateMeta( chocolatePaste ) ).toEqual({cost: null, weight: 1300, costPerUnit: 14})
    })

    it("should calculate meta for complex composite ingredient", () => {
        expect( calculateMeta( chocolateBatter ) ).toEqual({cost: null, weight: 1300, costPerUnit: 26.87})
    })
});