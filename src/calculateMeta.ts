import Ingredient from "./models/ingredient";
import calculateCostPerUnit from './calculateCostPerUnit'

const calculateMeta = (ingredient: Ingredient) => {
    const {cost, weight} = ingredient;
    const costPerUnit = parseFloat( calculateCostPerUnit(ingredient).toFixed(2) );
    return {cost, weight, costPerUnit};
}

export default calculateMeta;