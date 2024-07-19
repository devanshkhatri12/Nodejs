const mongoose = require('mongoose');
require('dotenv').config();

// localhost URL
// const mongoURL = process.env.MONGO_LOCAL_URL;

// deploy URL
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


