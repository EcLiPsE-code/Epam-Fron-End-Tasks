'use string'

class Sauce{
    name
    cost
    calories

    /**
     *
     * @param sauceInfo {Object}
     */
    constructor(sauceInfo) {
        this.name = sauceInfo['name']
        this.cost = sauceInfo['cost']
        this.calories = sauceInfo['calories']
    }

    /**
     * Returns the name of a pizza sauce
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
            throw new Error('Incorrect name sauce pizza')
        }
        this.name = value
    }

    set cost(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect cost sauce pizza')
        }
        this.cost = value
    }

    set calories(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect calories sauce pizza')
        }
        this.calories = value
    }

    [Symbol.toPrimitive](hint){
        return hint === 'string'?
            `Name: ${this.name}, cost: ${this.cost}, calories: ${this.calories}` :
            `${this.cost}`
    }
}
