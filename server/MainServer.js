var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors=require('cors');


// All user-defeind module 
var registration=require('./RegistrationServer');
var login=require('./LoginServer');


// declaration of host and port for server
var host = 'localhost';
var port = 3001;



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());




//fetching data from registration url and then insert that data into database
app.post('/registration',registration.insert);


app.post('/login', login.ValidateUser);



// this is the server running code
var server = app.listen(3001, function () {
   console.log("Example app listening at http://%s:%s", host, port)
})