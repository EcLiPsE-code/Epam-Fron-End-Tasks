'use strict'

/**
 * The class that describes the Pizza Base object
 */
class Base {
    baseInfo
    name
    cost
    calories
    /**
     *
     * @param baseInfo {Object}
     */
    constructor(baseInfo) {
        this.baseInfo = baseInfo
        this.name = baseInfo['name']
        this.cost = baseInfo['cost']
        this.calories = baseInfo['calories']
    }

    /**
     *
     * @returns {Object}
     */
    get baseInfo(){return this.baseInfo}

    /**
     * Return name of the selected base
     * @returns {String}
     */
    get name(){return this.baseInfo['name']}

    /**
     * Return count of the selected base
     * @returns {Number}
     */
    get cost(){return this.baseInfo['cost']}

    /**
     * Return the number of calories of the selected base
     * @returns {Number}
     */
    get calories(){return this.baseInfo['calories']}

    set baseInfo(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect base pizza')
        }
        this.baseInfo = value;
    }
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
}
