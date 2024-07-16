
// Normal function
function add(a,b){
    return a+b;
}
console.log(add(2,5));




// automatically run function
(function()
{
    console.log("hello")
})();




// callback function
const add = function(a,b, callback){
    console.log(a+b)
    callback()
}

add(2,3, () => console.log("executed sccessfully"));




// modules
var os = require('os')
var fs = require('fs')

var user = os.userInfo();
console.log(user)

fs.appendFile('practice.txt', 'Hi ' + user.username + '\n', () =>
{
    console.log('file created successfully')
})




// import files
const notes = require('./notes.js')
console.log('Running properly')

// get age from note file
let age = notes.age
console.log(age)




// npm package - lodash
const _ = require('lodash');

var arr = ['person', 'person', 1, 2, 1]

var filter = _.uniq(arr);
console.log(filter)
