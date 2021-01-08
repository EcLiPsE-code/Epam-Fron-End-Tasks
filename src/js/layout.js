function printCurrentDate() {
    const date = new Date();
    document.getElementById('current_date').innerHTML = getCurrentDate(date) + ' ' + getCurrentTime(date);
}
setInterval(printCurrentDate, 1000)
