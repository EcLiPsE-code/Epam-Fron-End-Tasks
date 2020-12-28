const express = require("express");
const bodyParser = require('body-parser')

const app = express();
const jsonParser = express.json();

app.use(express.static(`${__dirname}/public/css`))
app.use(express.static(`${__dirname}/public/js`))

app.get('/main', function (request, response) {
    response.sendFile(__dirname + "/src/layout.html");
});

app.post('/service', jsonParser, function (request, response){
    //if(!request.body) return response.sendStatus(400);

    response.send({
        name : request.body.name,
        email: request.body.email
    })
})

app.listen(3000, () => console.log("server start on port 3000..."));
