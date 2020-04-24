import Recipe from './recipe'
export default class Ingredient {
    public id: string;
    public name: string;
    public weight: number;
    public cost: number;
    public recipe?: Recipe;

    constructor(id: string, name: string, weight: number, cost: number, recipe?: Recipe) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.cost = cost;
        this.recipe = recipe;
    }
}