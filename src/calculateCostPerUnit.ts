import Ingredient from './models/ingredient';

const calculateUnitsRequired = (amt: number, weight: number): number => {
    return (amt / weight);
}

const calculateCostPerUnit = (i: Ingredient): number => {
    const {cost, recipe} = i;
    if (recipe) {
        let totalCost: number = 0;
        recipe.madeWith.forEach(component => {
            const {amt, ingredient, ingredient: {weight, cost}} = component;
            const componentCost: number = calculateUnitsRequired(amt, weight) * ( cost || calculateCostPerUnit(ingredient) );
            totalCost += componentCost;
        })
        return parseFloat(totalCost.toFixed(2));
    } else {
        return cost;
    }
}

export default calculateCostPerUnit;