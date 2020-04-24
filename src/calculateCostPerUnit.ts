import Ingredient from './models/ingredient';

const calculateCostPerUnit = (i: Ingredient): number => {
    const {cost, recipe} = i;
    if (recipe) {
        let totalCost: number = 0;
        recipe.madeWith.forEach(component => {
            const {amt, ingredient, ingredient: {weight, cost}} = component;
            totalCost += amt * ( cost || calculateCostPerUnit(ingredient) ) / weight;
        })
        return totalCost;
    } else {
        return cost;
    }
}

export default calculateCostPerUnit;