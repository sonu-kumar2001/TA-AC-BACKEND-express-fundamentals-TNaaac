const express = require('express');

const app = express();

app.use((req,res,next) => {
    if(req.url === '/admin') {
        console.log(req.url);
       return next("unauthorized");
    }
    next();
});

app.get('/',(req,res) => {
    res.send('welcome');
})

app.get('/about', (req,res) => {
    res.send('welcome to about page');
});

//error handler
app.use((err,req,res,next)=> {
    res.send(err);
})

app.use((req,res,next)=> {
    res.status(400).send('Page not found');
});


app.listen(4000, () => {
    console.log('server is running on port 4000')
})