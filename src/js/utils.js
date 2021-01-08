'use strict'

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
            month = '0' + month;
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
