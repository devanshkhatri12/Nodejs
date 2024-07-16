/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'test';
// const collection = 'info';

// Create a new database.
use(database);

// Create a new collection.
// db.createCollection(collection);


db.info.insertMany([
    {   id: 1,
        'name': 'dk',
        Occupassion: 'Coder'
    },
    {   id: 2,
        'name': 'kd',
        Occupassion: 'founder'
    },
    {   id: 3,
        'name': 'dev',
        Occupassion: 'Co-founder'
    }
]);


