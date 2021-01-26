'use strict'

class Pizza{
    base
    ingredients
    sauces

    /**
     *
     * @param base {Base}
     * @param ingredients {Ingredient[]}
     * @param sauces {Sauce[]}
     */
    constructor(base, ingredients, sauces) {
        this.base = base
        this.ingredients = ingredients
        this.sauces = sauces
    }

    /**
     *
     * @returns {Base}
     */
    get base(){return this.base}

    /**
     *
     * @returns {Ingredient[]}
     */
    get ingredients(){return this.ingredients}

    /**
     *
     * @returns {Sauce[]}
     */
    get sauces(){return this.sauces}

    set base(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect base for pizza')
        }
        this.base = value
    }

    set ingredients(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect ingredient for pizza')
        }
        this.ingredients.push(value)
    }

    set sauces(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect sauce for pizza')
        }
        this.sauces.push(value)
    }

    toJSON(){
        return JSON.stringify({
            'base' : this.base,
            'ingredients' : this.ingredients,
            'sauces' : this.sauces
        })
    }
}
