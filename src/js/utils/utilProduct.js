'use strict'

/**
 * An object that stores the value and calories
 * of various pizza bases. The cost is measured in dollars.
 * @type {{calzone: number, puff: number, italian: number, thick: number, thin: number}}
 */
const costBasesPizzas = {
    'thin' : {
        'name' : 'Thin base',
        'cost' : 4,
        'calories' : 28
    },
    'thick' : {
        'name' : 'Thick base',
        'cost' : 3.5,
        'calories' : 48
    },
    'puff' : {
        'name' : 'Puff base',
        'cost' : 3,
        'calories' : 41
    },
    'calzone' : {
        'name' : 'Calzone base',
        'cost' : 2.5,
        'calories' : 58
    },
    'italian' : {
        'name' : 'Italian base',
        'cost' : 5,
        'calories' : 72
    }
}

/**
 * An object that stores the value and calorie
 * content of various pizza ingredients. The cost is measured in dollars.
 * @type {{seafood: number, olives: number, meat: number, sausage: number, cheese: number}}
 */
const costIngredientsPizzas = {
    'cheese' : {
        'name' : 'Cheese',
        'cost' : 1,
        'calories' : 90
    },
    'sausage' : {
        'name' : 'Sausage',
        'cost' : 1.5,
        'calories' : 51
    },
    'meat' : {
        'name' : 'Meat',
        'cost' : 2.5,
        'calories' : 59
    },
    'olives' : {
        'name' : 'Olives',
        'cost' : 0.5,
        'calories' : 12
    },
    'seafood' : {
        'name' : 'Seafood',
        'cost' : 3.5,
        'calories' : 34
    }
}

/**
 * An object that stores the cost and calorie
 * content of various pizza sauces. The cost is measured in dollars.
 * @type {{pesto: number, white: number, tomato: number}}
 */
const costSaucesPizzas = {
    'tomato' : {
        'name' : 'Tomato',
        'cost' : 0.5,
        'calories' : 12,
    },
    'white' : {
        'name' : 'White',
        'cost' : 1.5,
        'calories' : 34
    },
    'pesto' : {
        'name' : 'Pesto',
        'cost' : 2.5,
        'calories' : 55
    }
}
