const express = require('express');

const app = express();

app.use('/',(req,res,next)=> {
    console.log(req.method,req.url,new Date());
    next();
});

app.use((req, res, next) => {
    let reply = "";
    req.on("data", (chunk) => {
        reply += chunk;
        console.log(req.body);
    }).on("end", () => {
        req.body = reply;
    });
    return next();
});

app.use((req, res, next) => {
    fs.readFile(__dirname + "/public" + req.url, (err, content) => {
        if(err) return next(err);
        res.sendFile(__dirname + "/public" + req.url);
    });
    return next();
});

// Some routes
app.get('/', (req, res) => {
    res.send('Welcome to Middleware Heaven');
});

// Handle all errors
app.use((err, req, res, next) => {
    console.log(err);
    res.send('An error has occured');
});


app.listen(4000,()=> {
    console.log('server is running on port 4000')
})