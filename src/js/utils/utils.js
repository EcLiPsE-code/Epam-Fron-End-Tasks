'use strict'

/**
 * Function, for returns current time
 * @param data {Date}
 * @returns {string}
 */
function getCurrentTime(date) {
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();

    if (+hour < 10){hour = '0' + hour}
    if (+minutes < 10){minutes = '0' + minutes}
    if (+seconds < 10){seconds = '0' + seconds}
    if (+milliseconds < 10){milliseconds = '0' + milliseconds}

    return `${hour}:${minutes}:${seconds}:${milliseconds}`
}

/**
 * Function, for returns current date
 * @param date
 */
function getCurrentDate(date) {
    let day = date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()

    if (+day < 10){day = '0' + day}
    if (+month < 10){month = '0' + month}

    return `${day}/${month}/${year}`
}

/**
 *
 * @param name {String}
 * @returns {*}
 */
function checkSauce(name){
    return sauces.find(item => item.name.toLowerCase() === name)
}

/**
 *
 * @param name {String}
 * @returns {*}
 */
function checkIngredient(name){
    return ingredients.find(item => item.name.toLowerCase() === name)
}

function calculationDifferentiatedPrice(cost){
    if (cost < 8){
        return cost * 0.2 + cost
    }
    else if (cost >8 && cost <= 10){
        return cost * 0.15 + cost
    }
    else{
        return cost * 0.1 + cost
    }
}

function calcCostPizza(){
    const costBase = base?.['cost']
    const costIngredients = ingredients?.reduce((sum, current) => sum + +current['cost'], 0)
    const costSauces = sauces?.reduce((sum, current) => sum + +current['cost'], 0)

    const res = (costBase === undefined ? 0 : costBase) +
        (costIngredients === undefined? 0 : costIngredients) +
        (costSauces === undefined? 0: costSauces)
    //console.log(res)
    document.getElementById('cost_pizza').innerHTML = calculationDifferentiatedPrice(res) + '$'
}

function calcCaloriesPizza(){
    const caloriesBase = base?.['calories']
    const caloriesIngredients = ingredients?.reduce((sum, current) => sum + current['calories'], 0)
    const caloriesSauces = sauces?.reduce((sum, current) => sum + current['calories'], 0)

    const res = (caloriesBase === undefined ? 0 : caloriesBase) +
        (caloriesIngredients === undefined? 0 : caloriesIngredients) +
        (caloriesSauces === undefined? 0: caloriesSauces)
    document.getElementById('calories_pizza').innerHTML = res
}
