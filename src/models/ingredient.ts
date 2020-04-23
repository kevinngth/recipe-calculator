export default class Ingredient {
    public id: string;
    public name: string;
    public weight: number;
    public cost: number;

    constructor(id: string, name: string, weight: number, cost: number) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.cost = cost;
    }
}