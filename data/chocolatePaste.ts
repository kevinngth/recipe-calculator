import ingredients from './ingredients'

const chocolatePaste = {
    id: 'choc-paste',
    name: 'Chocolate Paste',
    weight: 1300,
    cost: null,
    recipe: {
        id: '1',
        madeWith: [
            {
                id: '1',
                pos: 0,
                amt: 1000,
                qty: 1000,
                ingredient: ingredients[0]
            },
            {
                id: '2',
                pos: 1,
                amt: 1000,
                qty: 1000,
                ingredient: ingredients[1]
            },
            {
                id: '2',
                pos: 2,
                amt: 600,
                qty: 600,
                ingredient: ingredients[2]
            }
        ]
    }
}

export default chocolatePaste;