'use strict'

let arrayExpressions = []
const operations = ['+', '-', '*', '/']
const priority_operation = {
    '*' : 2,
    '/' : 2,
    '+' : 1,
    '-' : 1
}
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbol = {
    'operation': 'operation',
    'digit': 'digit'
}

/**
 * Function that returns the current date
 * @param date {Date}
 * @returns {string}
 */
function getCurrentDate(date){
    let day = date.getDay();
    let month = date.getMonth();
    const year = date.getFullYear();

    const result = () => {
        if (+day < 10){
            day = '0' + day;
        }
        if (+month < 10){
            if (+month === 0){
                month = 1
            }
            month = '0' + month
        }
        return `${day}/${month}/${year}`
    }

    return result();
}

/**
 * Function that returns the current time
 * @param date {Date}
 * @returns {string}
 */
function getCurrentTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const result = () => {
        if (+hours < 10) {
            hours = '0' + hours;
        }
        if (+minutes < 10) {
            minutes = '0' + minutes;
        }
        if (+seconds < 10) {
            seconds = '0' + seconds;
        }
        return `${hours}:${minutes}:${seconds}`
    }

    return result();
}

/**
 * Function for writing a number to an output field
 * @param value {String}
 */
function getDigit(value) {
    document.getElementById('expression_result').innerHTML += value
}

/**
 * Function for writing a operation to an output field
 * @param value {String}
 */
function getOperation(value) {
    document.getElementById('expression_result').innerHTML += value
}

/**
 * A function to bind a function to each number
 */
function createDigitOnclick(){
    document.querySelectorAll('.digit').forEach((item, index) => {
        item.onclick = () =>{
            getDigit(`${item.innerText.toString()}`)
        }
    })
}

/**
 * Function for changed checkbox
 * @param onCheckbox {String}
 * @param offCheckbox {String}
 */
function changeCheckbox(onCheckbox, offCheckbox) {
    document.getElementById(`${offCheckbox}`).checked = !document.getElementById(`${onCheckbox}`).checked
}

function changeRadioButton(){
    if (document.getElementById('cb_integer_mode').checked){
        document.querySelector('.coma_real').style.display = 'none'
    }
    else{
        document.querySelector('.coma_real').style.display = 'flex'
    }
}

function getPriority() {
    if (document.getElementById('cb_yes').checked){
        return true
    }
    else{
        return false
    }
}

/**
 * A function to bind a function to each number
 */
function createOperationOnclick(){
    document.querySelectorAll('.operation').forEach((item, index) => {
        if (item.className.toString() !== 'operation operation_calculate'){
            item.onclick = () =>{
                getOperation(`${item.innerText.toString()}`)
            }
        }
        else{
            item.onclick = () => {
                getExpression()
            }
        }
    })
}

/**
 * Method for send all expressions to server
 */
function sendExpressionsToServer(){
    let object = {}
    arrayExpressions.forEach((item, index, array) => {
        object[`expression${index}`] = item
    })
    let arrayExpressionsJSON = JSON.stringify(object)
    fetch('http://localhost:8080/server/', {
        method: 'POST',
        body: arrayExpressionsJSON
    })
        .then(response => response.json())
        .catch(error => {
            alert(`Error is ${error.message}`)
        })
}
