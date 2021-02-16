/**
 *
 * @param currentDate {Date}
 */
function castCurrentDate(currentDate) {
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth()
    let day = currentDate.getDay()

    return `${year}` +
            `/${+month < 10? '0' + +(month + 1).toString() : month}` +
            `/${+day < 10? '0' + day.toString() : day}`
}

/**
 *
 * @param currentTime {Date}
 */
function castCurrentTime(currentTime){
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()

    return `${+hours < 10? '0' + hours.toString() : hours}` +
            `:${+minutes < 10? '0' + minutes.toString() : minutes}` +
            `:${+seconds < 10? '0' + seconds.toString() : seconds}`
}