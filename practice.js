const mongoose = require('mongoose');
require('dotenv').config();

// localhost URL
// const mongoURL = 'mongodb://localhost:27017/test';

// deploy URL
// const mongoURL = 'mongodb+srv://dkkhatri941:khatri12345@student.vyiuhqe.mongodb.net/'

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const p = mongoose.connection;


// Event listners
p.on('connected', () => {
    console.log('connected');
})


p.on('error', (error) => {
    console.log('error');
})


p.on('disconnected', () => {
    console.log('Disconnected');
})

module.exports = p;


