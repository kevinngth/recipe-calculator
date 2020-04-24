import ingredients from './ingredients';
import chocolatePaste from './chocolatePaste';

const chocolateBatter = {
    id: 'choc-batter',
    name: 'Chocolate Batter',
    weight: 1300,
    cost: null,
    recipe: {
        id: '2',
        madeWith: [
            {
                id: '1',
                pos: 0,
                amt: 2000,
                qty: 2000,
                ingredient: chocolatePaste
            },
            {
                id: '2',
                pos: 0,
                amt: 1000,
                qty: 1000,
                ingredient: ingredients[1]
            },
            {
                id: '3',
                pos: 0,
                amt: 500,
                qty: 500,
                ingredient: ingredients[2]
            },
            {
                id: '4',
                pos: 0,
                amt: 10,
                qty: 10,
                ingredient: ingredients[3]
            },
        ]
    }
}

export default chocolateBatter;