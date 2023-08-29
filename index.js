const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

app.listen(port,function(err){
    if(err){
        console.log("Error in running server at port",port);
    }else{
        console.log("Server is running on port",port);
    }
})