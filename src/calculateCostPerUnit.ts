import Ingredient from './models/ingredient';

const calculateCostPerUnit = (ingredient: Ingredient) => {
    return ingredient.cost;
}

export default calculateCostPerUnit;