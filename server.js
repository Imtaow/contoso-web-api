'user strict'

const express = require('express');
const path = require('path');

const PORT = 8000;
const HOST = '0.0.0.0'
const app = express();
app.get('/',(req,res)=> {
    //res.send('Hello World - 1.0.0');
    res.sendFile(path.join(__dirname, 'test.html'));

});
app.listen(PORT,HOST,() => {
    console.log(`Running on http://${HOST}:${PORT}`);
});