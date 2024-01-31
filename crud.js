var express = require('express');
var mysql = require('mysql');
var server = express();

var db = require('./db');          //calls connection to database from db.js file 
                                   //initiates a connection so the down commands can executein database
    

//database creation
server.get('/createdb',function(req,res){

    let sql = 'CREATE DATABASE homes';
    db.query(sql,function(err,results,fields){
        if(err) throw err;
        res.send('New database created...');
    });

});

//table creation
server.get('/create/table',function(req,res){

    let sql = 'CREATE TABLE sample2(id int primary key,name varchar(30),phone varchar(20))';

    db.query(sql,function(err){
        if(err) throw err;
        res.send('New table created...');
    });

});

//student insertion
server.get('/insert/student',function(req,res){

    let sql = "INSERT INTO sample2 VALUES(1,'Thomas',0694949700)";

    db.query(sql,function(err){
        if(err) throw err;
        res.send('New student inserted...');
    });

});

//initial app display
server.get('/',function(req,res){

    res.send('Hello Tomnomnom');

});


server.listen('5000',function(err) {
    if(err) throw err;

    console.log('Server started at port 5000');
    console.log('You can access the webpage using http://localhost:5000')
})
