// waiter alive
const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// getting data from db
// menu
app.get('/', function(request, response){
    response.send('Menu 🙋‍♂️: What you want...')
})

const Person = require('./models/person');


// POST route to add a person
app.post('/person', async (req,res) => {
    try{
        const data = req.body

        const newPerson = new Person(data)

        const response = await newPerson.save();

        console.log('data saved')

        res.status(200).json(response);
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'});
    }



// Bad Practice
    // const data = req.body

    // const newPerson = new Person(data);

    // newPerson.save((error, savedperson) => {
    //     if(error){
    //         console.log('Error saving person: ', error);
    //         res.status(500).json({error: 'Internal server error'})
    //     }
    //     else
    //     {
    //         console.log('data saved succesfully');
    //         res.status(200).json(savedperson);
    //     }
    // })
})


app.get('/person', async (req, res) => {
    try{
        const data = await Person.find()
        console.log('data fetched')
        res.status(200).json(data)

    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'});
    }
})

// sending data to db
// app.post('/item', function(request, response){
//     response.send('data is saved')
// })

// // menu options
// app.get('/Biryani', function(request, response){
//     response.send('Sure sir, we glad to serve briyani')
// })

// app.get('/Dosa', function(request, response){
//     var Customized_dosa = {
//         name: 'masala dosa',
//         size: '15 cm length',
//         is_sambhar: 'true',
//         is_chutney_red: 'true',
//         is_chutney_white: 'true',
//         is_chutney_green: 'false'
//     }
//     response.send(Customized_dosa)
// })

app.listen(3000, () =>{
    console.log('listening on port 3000')
})