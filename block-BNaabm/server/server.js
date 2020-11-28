let express = require('express');

let app = express();

app.use((req,res,next)=> {
    console.log(req.method,req.url);
    next();
})

app.get('/',(req,res) => {
    res.send('welcome to express server')
})

app.listen(3000,()=>{
    console.log('server is running on port 3k');
})