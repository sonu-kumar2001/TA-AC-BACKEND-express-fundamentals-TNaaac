const express = require('express');

const app = express();

const logger = require('morgan');

const cookieParser = require('cookie-parser');
//middleware for form and json data

app.use(express.json());

app.use(express.urlencoded({extended: false}));

// handling static data

app.use(express.static(__dirname + "/public"));

// handling logging and cokkies

app.use(logger('dev'));

app.use(cookieParser());

app.use('/admin',(req,res,next)=> {
    next('unauthorized');
})
//routes
app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/about',(req,res) => {
    res.send('welcome to about page');
})
// error handler 404

app.use((req,res,next) => {
    res.send('Page not found');
})

//custom error handler

app.use((err,req,res,next)=> {
    res.send(err);
})

app.listen(4000,()=> {
    console.log("server is listening on port 4000")
})