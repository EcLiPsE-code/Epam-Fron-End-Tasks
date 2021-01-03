/**
 * Метод для отображения текущей даты и времени в footer
 */
function calcCurrentDate() {
    let element = document.getElementById("current-date")
    element.innerText = parseDate().toString() + ' ' + parseTime().toString()
}

/**
 * Метод, предназначенный для парсинга текущей даты
 * для ее вывода а footer в удобночитаемом виде
 * @returns {string} текущая дата в формате 25/11/2020
 */
function parseDate(){
    let currentDate = new Date()
    let day = currentDate.getDay()
    let month = currentDate.getMonth()
    let year = currentDate.getFullYear()

    if (+day < 10){
        day = '0' + day
    }
    if (+month < 10){
        month = '0' + month
    }
    return `${day}/${month}/${year}`
}

/**
 * Метод, предназначенный для парсинга текущего времени
 * и для его вывода в footer в удобночитаемом виде
 * @returns {string} текущее время в формате 14:29:46
 */
function parseTime(){
    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (+hours < 10){
        hours = '0' + hours
    }
    if (+minutes < 10){
        minutes = '0' + minutes
    }
    if (+seconds < 10){
        seconds = '0' + seconds
    }
    return `${hours}:${minutes}:${seconds}`
}
setInterval(calcCurrentDate, 1000)

/**
 * Метод для оторабражения нужного контента при клике
 * на определенные пункты меню
 * @param view контект, который должен быть отображен
 * @param view1 контент, который должен быть скрыт
 * @param view2 контент, который должен быть скрыт
 */
function onChange(view, view1, view2){
    document.querySelector(view1).style.display = 'none'
    document.querySelector(view2).style.display = 'none'
    document.querySelector(view).style.display = 'flex'
}

/**
 * Метод, предназначенный для добавления дополнительного стиля
 * для таблицы, который находится в файле "style2-table.css" в head
 * @param path путь до файла со стилями для таблицы
 */
function createStyle(path){
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', path)
    link.setAttribute('class', 'style2')
    document.head.appendChild(link)
}

/**
 * Метод, предназначенный для сброса стиля для таблицы, которые
 * находятся в файле "style2-table.css"
 */
function removeStyle(){
    const childNodes = document.head.childNodes
    childNodes.forEach((node) => {
        if (node.className === 'style2'){
            document.head.removeChild(node)
        }
    })

}
/**
 * Метод, с помощью которого изменяется текущий стиль таблицы
 */
function changedTableStyle(){
    let sel = document.getElementById('styles')
    let currentValueSelect = sel.options[sel.selectedIndex].value.toString()
    if (currentValueSelect === 'Style 1'){
        removeStyle()
    }
    else{
        removeStyle()
        createStyle('./less/style2__table.css')
        console.log('file css successfully added')
    }
}
