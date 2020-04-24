import Ingredient from './models/ingredient';
import calculateNumberOfUnits from './calculateNumberOfUnits';

const calculateCostPerUnit = (ingredient: Ingredient): number => {
    const {cost, recipe} = ingredient;
    if (recipe) {
        let totalCost: number = 0;
        recipe.madeWith.forEach(component => {
            const {amt, ingredient: {weight, cost}} = component;
            totalCost += calculateNumberOfUnits(amt, weight) * cost;
        })
        return totalCost;
    } else {
        return cost;
    }
}

export default calculateCostPerUnit;