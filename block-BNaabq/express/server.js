let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

app.use(logger('dev'));

app.use(cookieParser());

app.use((req,res,next) => {
    res.cookie("username", "suraj");
    next();
})

app.get('/about', (req,res)=> {
    res.send('check your cookies');
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})