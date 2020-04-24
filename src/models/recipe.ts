import Component from './component';

export default class Recipe {
    public id: string;
    public madeWith: Array<Component>;

    constructor(id: string, madeWith: Array<Component>) {
        this.id = id;
        this.madeWith = madeWith;
    }
}