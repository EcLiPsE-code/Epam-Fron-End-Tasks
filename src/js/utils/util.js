'use strict'

function convertToJSON(object){
    return JSON.stringify(object)
}

function convertToObjet(jsonObject){
    return JSON.parse(jsonObject)
}


function readFiles(fileName, contentId){

    let objects
    fetch(`src/files/${fileName}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            objects = response
            objects.forEach((item) => {
                let root = document.createElement('div')
                root.innerHTML = JSON.stringify(item)
                document.getElementById(contentId).appendChild(root)
            })
        })
}
