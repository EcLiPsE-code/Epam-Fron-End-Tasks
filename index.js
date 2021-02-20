'use strict'

const fs = require('fs')
const { request, response } = require('express')
const express = require('express')
const jsonParser = express.json()

const app = express()

app.use('/', express.static(__dirname + '/src'))
app.use((request, response, next) => {
    fs.open('students.json', 'a+', (err) => {
        if (err) console.log('Error create file "students.json"')
    })
    next()
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/allStudents', jsonParser, (req, res) => {
    fs.readFile('students.json', 'utf-8', (err, data) => {
        if (err) console.log(`Error: ${err}`)
        
        res.send({
            'students': data
        })
    })
})
app.post('/editStudent', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)

    fs.readFile('students.json', 'utf-8', (err, data) => {
        let array = JSON.parse(data)
        let mapArray = array.map((item) => {
            if (JSON.parse(item).id == req.body.id){
                let fintStudent = JSON.parse(item)
                fintStudent.id = req.body.id
                fintStudent.firstName = req.body.firstName
                fintStudent.secondName = req.body.secondName
                fintStudent.age = req.body.age
                fintStudent.speciality = req.body.speciality
                return JSON.stringify(fintStudent)
            }
            return item
        })
        fs.writeFile('students.json', JSON.stringify(mapArray), (err) => {
            if (err) console.log(err)
        })
    })
    res.send(JSON.stringify({
        'msg' : `Student with id = ${req.body.id} sucessfully removed!`
    }))
})
app.post('/deleteStudent', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)

    fs.readFile('students.json', 'utf-8', (err, data) => {
        let array = JSON.parse(data)
        let filterArray = array.filter((item) => JSON.parse(item).id !== req.body.id)
        fs.writeFile('students.json', JSON.stringify(filterArray), (err) => {
            if (err) console.log(err)
        })
    })
    res.send(JSON.stringify({
        'msg' : 'Student successfully removed!'
    }))
})
app.post('/addStudent', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)
    
    fs.readFile('students.json', 'utf-8', (err, data) => {
        if (!data){
            let arrayObjectJSON = []
            arrayObjectJSON.push(JSON.stringify({
                'id' : req.body.id,
                'firstName' : req.body.firstName,
                'secondName' : req.body.secondName,
                'age' : req.body.age,
                'speciality' : req.body.speciality
            }))
            fs.writeFile('students.json', JSON.stringify(arrayObjectJSON), (err) => {
                if (err) console.log(err)
            })
        }
        else{
            let array = JSON.parse(data)
            array.push(JSON.stringify({
                'id': req.body.id,
                'firstName' : req.body.firstName,
                'secondName' : req.body.secondName,
                'age' : req.body.age,
                'speciality' : req.body.speciality
            }))
            fs.writeFile('students.json',JSON.stringify(array), (err) => {
                if (err) console.log(err)
            })
        }
    })
    fs.readFile('students.json', 'utf-8', (err, data) => {
        if (err) console.log(`Error: ${err}`)
        res.send(JSON.stringify({
            'msg' : 'Student sucessfully added in the file "students.json"!',
            'students': data
        }))
    })
})
app.listen(3000)