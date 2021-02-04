'use strict'

/**
 * The class that describes the Pizza Base object
 */
class Base {
    name
    cost
    calories
    /**
     *
     * @param baseInfo {Object}
     */
    constructor(baseInfo) {
        this.name = baseInfo['name']
        this.cost = baseInfo['cost']
        this.calories = baseInfo['calories']
    }

    /**
     * Return name of the selected base
     * @returns {String}
     */
    get name(){return this.name}

    /**
     * Return count of the selected base
     * @returns {Number}
     */
    get cost(){return this.cost}

    /**
     * Return the number of calories of the selected base
     * @returns {Number}
     */
    get calories(){return this.calories}

    set name(value){
        if (value === '' || value === undefined){
            throw  new Error('Incorrect name base pizza')
        }
        this.name = value
    }
    set cost(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect cost base pizza')
        }
        this.cost = value
    }
    set calories(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect calories base pizza')
        }
        this.calories = value
    }

    [Symbol.toPrimitive](hint){
        return hint === 'string'?
            `{Name: ${this.name}, cost: ${this.cost}, calories: ${this.calories}` :
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
