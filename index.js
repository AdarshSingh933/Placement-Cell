const express = require('express');
const app = express();
const port = 4000;
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');

app.set('view engine','ejs');
app.set('views','./views');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(express.urlencoded());
app.use(expressLayouts);
app.use(express.static('./assets'));

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log("Error in running server at port",port);
    }else{
        console.log("Server is running on port",port);
    }
})