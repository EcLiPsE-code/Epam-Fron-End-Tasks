const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const jsonParser = express.json()

app.use(express.static(__dirname + '/src'))
app.get('/', ((req, res) => {
    res.sendFile(__dirname + '/index.html')
}))

app.post('/pizzeria/order', jsonParser, function (req, res){
    let data = fs.readFileSync('pizzas.json', 'utf-8')
    let pizzas = data === ''? [] : JSON.parse(data)

    pizzas.push({
        'base': req.body.base,
        'ingredients': req.body.ingredients,
        'sauces': req.body.sauces
    })

    data = JSON.stringify(pizzas)
    fs.writeFileSync('pizzas.json', data)
    res.json({
        'base': req.body.base,
        'ingredients': req.body.ingredients,
        'sauces': req.body.sauces
    })
})

app.listen(8080)

