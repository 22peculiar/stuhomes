var express = require('express');
var mysql = require('mysql');
var path = require('path');
var server = express();

//declaration of what router is used
var indexRoute = require('./routes/controller.js')

//where the to be rendered pages reside
server.set('views',path.join(__dirname,'views'));
server.set('view engine','pug');

//where static files are set
server.use(express.static(path.join(__dirname,'public')))

//connects and uses the router/routes to the pages
server.use('/',indexRoute);

server.listen('5000',function(err) {
    if(err) throw err;
    console.log('Server is running at http://localhost:5000')
})






//Main application file