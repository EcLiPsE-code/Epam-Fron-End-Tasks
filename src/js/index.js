'use strict'

function addEventToJsonFile(){
    const dateEvent = document.getElementById('dateEvent').value.toString()
    const timeEvent = document.getElementById('timeEvent').value.toString()
    const nameEvent = document.getElementById('nameEvent').value.toString()
    const degreeEvent = document.getElementById('degreeEvent').value.toString()
    const notesEvent = document.getElementById('notesEvent').value.toString()

    let jsonObject = convertToJSON({
        'dateEvent' : dateEvent || '',
        'timeEvent' : timeEvent || '',
        'nameEvent' : nameEvent || '',
        'degreeEvent' : degreeEvent || '',
        'notesEvent' : notesEvent || ''
    })

    let fileName = document.getElementById('add-file-name').value
    readFiles(jsonObject, fileName)
}

function getAllDataFromFile1(){
    readFiles('file1.json', 'content-1')
}

function getAllDataFromFile2(){
    readFiles('file2.json', 'content-2')
}

function getAllDataFromFile3(){
    readFiles('file3.json', 'content-3')
}

(() => {
    setTimeout(() => {
        getAllDataFromFile1()
    }, 1000)
    setTimeout(() => {
        getAllDataFromFile2()
    }, 2000)
    setTimeout(() => {
        getAllDataFromFile3()
    }, 3000)
})()

document.getElementById('btnAddEvent').addEventListener("click", () => {
    addEventToJsonFile(null)
})