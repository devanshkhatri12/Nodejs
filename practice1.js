const express = require('express')
const app = express()
const p = require('./practice')
require('dotenv').config()
const PORT = process.env.PORT || 3000


const bodyParser = require('body-parser')
app.use(bodyParser.json());


const student = require('./models/input1');


app.get('/', function(req, res) {
    res.send('Got it!')
})


const studentRouter = require('./Routes/studentRoutes')

app.use('/input1', studentRouter)


app.listen(PORT, () => {
    console.log('listen to the port')
});