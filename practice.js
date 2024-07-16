const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/test';

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


