'use strict';

let defaultURL = Function;
let update = updateDataEvent(3000);

(() => {
    setTimeout(() => {
        getFile('file1.json', 'content-1')
    }, 1000)
    setTimeout(() => {
        getFile('file2.json', 'content-2')
    }, 2000)
    setTimeout(() => {
        getFile('file3.json', 'content-3')
    }, 3000)
    document.getElementById('add-event-btn').addEventListener('click', () => {
        addEventToJsonFile()
    })
    defaultURL = createURL('localhost:3000')
})()

update(1000, 'file1.json', 'content-1')
update(2000, 'file2.json', 'content-2')
update(3000, 'file3.json', 'content-3')

function addEventToJsonFile(){
    let event = createEvent()

    let fileName = document.getElementById('file-name-add').value.toString()
    const url = new URL(defaultURL(`files`))
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            'event' : event,
            'fileName' : fileName
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        document.getElementById('log').appendChild(createLog(response.msg, 'green'))
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    })
}

function getFile(fileName, divName){
    let url = new URL(defaultURL('getData'))
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            'fileName' : fileName
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        var node = document.getElementById(divName);
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
        if (response.events){
            response.events.forEach(element => {
                let rootEl = document.createElement('div')
                //console.log(JSON.parse(element))
                rootEl.innerHTML = element
                document.getElementById(divName).appendChild(rootEl)
            });
        }
        else{
            let rootEl = document.createElement('div')
            rootEl.innerHTML = response.events
            document.getElementById(divName).appendChild(rootEl)
        }
        document.getElementById('log').appendChild(createLog(response.msg, 'green'))
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    })
}