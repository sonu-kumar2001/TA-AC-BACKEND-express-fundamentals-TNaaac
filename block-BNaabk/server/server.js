let express = require('express');

let app = express();

app.get('/',(req,res)=> {
    res.send('welcome');
})

app.listen(3000,()=> {
    console.log('server is running on port 3k');
})