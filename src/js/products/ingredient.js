'use strict'

/**
 * This class describes the ingredients
 * that can be included in pizza.
 */
class Ingredient{
    name
    cost
    calories

    /**
     *
     * @param ingredientInfo {Object}
     */
    constructor(ingredientInfo  ) {
        this.name = ingredientInfo['name']
        this.cost = ingredientInfo['cost']
        this.calories = ingredientInfo['calories']
    }

    /**
     * Returns the name of a pizza ingredient
     * @returns {String}
     */
    get name(){return this.name}

    /**
     * Returns the cost of a pizza ingredient
     * @returns {Number}
     */
    get cost(){return this.cost}

    /**
     * Returns the calories of a pizza ingredient
     * @returns {Number}
     */
    get calories(){return this.calories}

    /**
     *
     * @param value {String}
     */
    set name(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect name ingredient of pizza')
        }
        this.name = value
    }

    set cost(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect cost ingredient of pizza')
        }
        this.cost = value
    }

    set calories(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect calories ingredient of pizza')
        }
        this.calories = value
    }

    [Symbol.toPrimitive](hint){
        return hint === 'string'?
            `Name: ${this.name}, cost: ${this.cost}, calories: ${this.calories}` :
            `${this.cost}`
    }

    toJSON(){
        return JSON.stringify({
            'name' : this.name,
            'cost' : this.cost,
            'calories' : this.calories
        })
    }
}
