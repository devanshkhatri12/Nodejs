const mongoose = require('mongoose')

// define mongo db connection url
const mongoURL = 'mongodb://localhost:27017/hotels'

// set up mongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Get the default connection
// Mongoose maintain a default connection object represt. the mongo connection
const db = mongoose.connection;


// define event listners for DB
db.on('connected', () => {
    console.log('Connected to mongoDB server')
});

db.on('error', (error) => {
    console.log('MongoDB connection error', error)
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected')
});


// export the database concection
module.exports = db;