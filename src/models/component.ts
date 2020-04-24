import Ingredient from "./ingredient";

export default class Component {
    public id: string;
    public pos: number;
    public amt: number;
    public qty: number;
    public ingredient: Ingredient;

    constructor(id: string, pos: number, amt: number, qty: number, ingredient: Ingredient) {
        this.id = id;
        this.pos = pos;
        this.amt = amt;
        this.qty = qty;
        this.ingredient = ingredient;
    }
}