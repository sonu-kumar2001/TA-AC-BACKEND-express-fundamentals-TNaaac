let express = require('express');

let app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname + "/public"))

app.get('/',(req,res)=> {
    res.sendFile(__dirname + "/index.html");
})

app.post('/json',(req,res)=> {
    console.log(req.body)
})

app.post('/contact',(req,res) => {
    console.log(req.body);
})


app.listen(3000,() => {
    console.log('server is running on port 3000');
})