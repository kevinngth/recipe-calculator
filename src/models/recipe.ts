import Ingredient from "./ingredient";

export default class Recipe {
    public id: string;
    public madeWith: Array<Component>;

    constructor(id: string, madeWith: Array<Component>) {
        this.id = id;
        this.madeWith = name;
    }
}

class Component {
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