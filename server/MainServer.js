var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql=require('mysql');
const cors=require('cors');
var registration=require('./Registration');


// database connection


//variable that should be added into user table 
var username,password,fullname,mobile,email;

// declaration of host and port for server
var host = 'localhost';
var port = 3001;



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors());



//fetching data from registration url
app.post('/registration',registration.insert);





app.get('/kk', function (req, res) {
    
    //console.log('-------------',req.body);
    res.send('jj');
   
 })
 

var server = app.listen(3001, function () {
   console.log("Example app listening at http://%s:%s", host, port)
})