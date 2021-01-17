'use strict'

/**
 * Displaying the current date and time
 */
function printCurrentDate() {
    const date = new Date();
    document.getElementById('current_date').innerHTML = getCurrentDate(date) + ' ' + getCurrentTime(date);
}
setInterval(printCurrentDate, 1000)
/**
 * Clearing the output field
 */
function removeExpression() {
    document.getElementById('expression_result').innerHTML = ''
}

/**
 * A function to bind a function to each number
 */
createDigitOnclick();

/**
 * A function to bind a function to each number
 */
createOperationOnclick();

/**
 * Function for adding an expression to an array and
 * calculating the value of the expression
 */
function getExpression() {
    let express = document.getElementById('expression_result').innerText.toString();
    arrayExpressions.push(express.toString()) //added express in array
    //document.getElementById('expression_result').innerHTML = eval(express);
    let symbols = []

    let digit = []
    express.split('').forEach((item, index, array) => {
        if (operations.includes(item)){
            symbols.push(digit.join(''))
            symbols.push(item)
            digit = []
        }
        else{
            digit.push(item)
            if (index === array.length - 1){
                symbols.push(digit.join(''))
            }
        }
    })
    let result = undefined
    const resultCheckPriority = getPriority()
    if (resultCheckPriority){
        console.log('priority mode activated')
        symbols.forEach((item, index, array) => {
            let res = 0;
            if (item === '/'){
                if (result !== undefined){
                    res = (result / +array[index + 1])
                    result = res;
                }
                else{
                    res = (+array[index - 1] / +array[index + 1])
                    result = res;
                }
            }
            else if (item === '*'){
                if (result !== undefined){
                    res = (result * +array[index + 1])
                    result = res
                }
                else{
                    res = (+array[index - 1] * +array[index + 1])
                    result = res;
                }
            }
        })
        symbols.forEach((item, index, array) => {
            let res = 0
            if (item === '+'){
                if (result !== undefined){
                    res = (result + +array[index - 1])
                    result = res
                }
                else{
                    res = (+array[index - 1] + +array[index + 1])
                    result = res;
                }
            }
            else if (item === '-'){
                if (result !== undefined){
                    res = (result - +array[index - 1])
                    result = res
                }
                else{
                    res = (+array[index - 1] - +array[index + 1])
                    result = res;
                }
            }
        })
    }
    else{
        console.log('non-priority mode activated')
        symbols.forEach((item, index, array) => {
            let res = 0;
            if (item === '/'){
                if (result !== undefined){
                    res = (result / +array[index + 1])
                    result = res;
                }
                else{
                    res = (+array[index - 1] / +array[index + 1])
                    result = res;
                }
            }
            else if (item === '*'){
                if (result !== undefined){
                    res = (result * +array[index + 1])
                    result = res
                }
                else{
                    res = (+array[index - 1] * +array[index + 1])
                    result = res;
                }
            }
            else if (item === '+'){
                if (result !== undefined){
                    res = (result + +array[index + 1])
                    result = res
                }
                else{
                    res = (+array[index - 1] + +array[index + 1])
                    result = res;
                }
            }
            else if (item === '-'){
                if (result !== undefined){
                    res = (result - +array[index + 1])
                    result = res
                }
                else{
                    res = (+array[index - 1] - +array[index + 1])
                    result = res;
                }
            }
        })
    }
    document.getElementById('expression_result').innerHTML = result.toString();
    sendExpressionsToServer()
}
