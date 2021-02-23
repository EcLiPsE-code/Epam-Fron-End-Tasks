'use strict'

function convertToJSON(object){
    return JSON.stringify(object)
}

function convertToObjet(jsonObject){
    return JSON.parse(jsonObject)
}

function createURL(hostname){
    return function(pathname){
        return `http://${hostname}/${pathname}`
    }
}

function createLog(msg, color){
    let rootEl = document.createElement('div')
    rootEl.innerHTML = msg
    rootEl.style.color = color
    return rootEl
}

function updateDataEvent(interval){
    return function(timeout, fileName, contentId){
        setTimeout(() => {
            setInterval(() => {
                getFile(fileName, contentId)
                document.getElementById('log').appendChild(createLog(`Data whith file "${fileName}" sucessfully updated!`, 'yellow'))
            }, interval)
        }, timeout)
    }
}

function createEvent(){
    return {
        'dateEvent' : document.getElementById('add-date-event').value.toString(),
        'timeEvent' : document.getElementById('add-time-event').value.toString(),
        'nameEvent' : document.getElementById('add-name-event').value.toString(),
        'degreeImportanceEvent' : document.getElementById('add-degreeImportance-event').value.toString(),
        'nodesEvent' : document.getElementById('add-nodes-event').value.toString(),
    }
}
