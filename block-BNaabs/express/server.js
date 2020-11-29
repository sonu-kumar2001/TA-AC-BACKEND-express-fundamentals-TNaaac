let express = require('express');

let app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/new',(req,res) => {
    res.sendFile(__dirname + '/new.html');
})

app.post('/new',(req,res)=> {
    console.log(req.body);
    res.json(req.body);
})

app.listen(4000,()=> {
    console.log('server is running on port 4000');
})