const app = require('express')();
const http = require('http').Server(app);


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nandini:test@sample-test1-db.jy3sjj2.mongodb.net/?retryWrites=true&w=majority&appName=sample-test1-db')

const User = require('./models/user');

// async function insert (){
//     await User.create({
//         name: 'surya',
//         email:'surya@gmail.com',
//         phone:'1234569078'
//     })
// } 
// insert();

// http.listen(3000,function(){
//     console.log('server is running');
// });
app.get('/',(req,res) => {
    res.send('hellooo');
    console.log('hellooo');
})

app.listen(3000,function(){
        console.log('server is running');
    });