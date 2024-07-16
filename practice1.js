const express = require('express')
const app = express()
const p = require('./practice')


const bodyParser = require('body-parser')
app.use(bodyParser.json());


const student = require('./models/input1');


app.get('/', function(req, res) {
    res.send('Got it!')
})


const studentRouter = require('./Routes/studentRoutes')

app.use('/input1', studentRouter)

app.listen(3000, () => {
    console.log('listen to the port')
});