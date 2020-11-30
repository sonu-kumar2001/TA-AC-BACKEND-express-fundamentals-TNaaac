const express = require('express');

const app = express();

const logger = require('morgan');

const cookieParser = require('cookie-parser');

//middelware

app.use(logger('dev'));

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use((req,res,next) => {
    res.cookie("name","sonu");
    next();
})

app.use('/admin',(req,res,next)=> {
    next('unauthorized');
})
//routes

app.get('/',(req,res) => {
    res.send('<h2>welcome to express</h2>');
});

app.get('/users/:username',(req,res) => {
    let username = req.params.username
    res.send('</h2>username</h2>');
});

app.post('/form',(req,res) => {
    res.json(req.body);
});

app.post('/json',(req,res) => {
    res.type("text").send(req.body);
});

app.get('/about',(req,res) => {
    res.send('My name is qwerty');
});

app.use((err,req,res,next)=> {
    res.status(500).send(err);
})

app.use((req,res,next) => {
    res.status(404).send("<h2>Page not found</h2>")
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
});