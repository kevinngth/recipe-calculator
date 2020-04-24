import Ingredient from "./models/ingredient";
import calculateCostPerUnit from './calculateCostPerUnit'

const calculateMeta = (ingredient: Ingredient) => {
    const {cost, weight} = ingredient;
    const costPerUnit = calculateCostPerUnit(ingredient);
    return {cost, weight, costPerUnit};
}

export default calculateMeta;