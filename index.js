'use strict'

const express = require('express')
const app = express()
const jsonParser = express.json()
const fs = require('fs')

app.use('/', express.static(__dirname + '/src'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.post('/getData', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)

    fs.readFile(req.body.fileName, 'utf-8', (err, data) => {
        if (err) console.log(err)
        let events
        if (!data){
            events = ''
        }
        else{
            events = JSON.parse(data)
        }
        res.send(JSON.stringify({
            'msg' : `Event with file ${req.body.fileName} sucessfully readen`,
            'events' : events
        }))
    })
})
app.post('/files', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)

    fs.readFile(req.body.fileName, 'utf-8', (err, data) => {
        if (!data){
            let arrayObjectJSON = []
            arrayObjectJSON.push(JSON.stringify(req.body.event))
            fs.writeFile(req.body.fileName, JSON.stringify(arrayObjectJSON), (err) => {
                if (err) console.log(err)
            })
        }
        else{
            let array = JSON.parse(data)
            array.push(JSON.stringify(req.body.event))
            fs.writeFile(req.body.fileName,JSON.stringify(array), (err) => {
                if (err) console.log(err)
            })
        }
    })
    fs.readFile(req.body.fileName, 'utf-8', (err, data) => {
        if (err) console.log(`Error: ${err}`)
        res.send(JSON.stringify({
            'msg' : `Event sucessfully added in the file "${req.body.fileName}"!`,
            'events': data
        }))
    })
})
app.listen(3000)