const express = require('express')
const route = express.Router();
// const p = require('./practice')

const student = require('./../models/input1');

// send data
route.post('/', async (req, res) => {
    try{
        const data = req.body;

        const newstudent= new student(data);
    
        const response = await newstudent.save()

        console.log('Data Saved');

        res.status(200).json(response)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({err:'Internal server error'});
    }
})


// get data
route.get('/', async (req, res) => {
    try{
        const response = await student.find()
        console.log('Data fetched')
        res.status(200).json(response)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({err:'Internal server error'});
    }
})


// Parametrized API
route.get('/:className', async (req , res) => {
    try{
        const className = req.params.className;

        if(className == '11th' || className == '12th')
        {
            const response = await student.find({class: className});

            console.log('Data Fetched');

            res.status(200).json(response);
        }
        else
        {
            res.status(404).json({err: 'Not found'});
        }
    }catch(err)
    {
        console.log(err)
        res.status(500).json({err:'Internal server error'});
    }
})


// update data
route.put('/:id', async (req , res) => {
    try{
            const studentID = req.params.id;            // extract the id fron URL parameter
            const updateStudentID = req.body;           // update data from person

            const response = await student.findByIdAndUpdate(studentID , updateStudentID, {
                new: true,                              // return the update document
                runValidators: true                     // all constrait true like required
            })

        // student not found check
        if(!updateStudentID)
        {
            res.status(404).json({err: 'student not found'})
        }

        console.log('Update Successfully')
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({err:'Internal server error'});
    }
})


// Delete data
route.delete('/:id', async (req , res) => {
    try{

        const studentID = req.params.id;

        const response = await student.findByIdAndDelete(studentID)

        if(!response)
        {
            req.status(404).json({err: 'student not found'})
        }

        console.log('Delete Successfully')
        req.status(200).json({message: 'student deleted successfully'})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({err:'Internal server error'});
    }
});


module.exports = route
