var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors=require('cors');
const multer=require('multer');
//var cookieParser=require('cookie-parser');
//var session = require('express-session');

// All user-defeind module 
var registration=require('./RegistrationServer');
var login=require('./LoginServer');
var GigDetail=require("./GigDetailServer");
var PostProject=require("./PostProjectServer");
var BidServer=require("./BidServer");
var OfferList=require("./OfferServer");

// declaration of host and port for server
var host = 'localhost';
var port = 3001;



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));




// parse application/json
app.use(bodyParser.json());
app.use(cors());
/*app.use(cors({
   origin:["http://localhost:3000"],
   methods:["GET","POST"],
   credentials:true
}));
app.use(cookieParser())
app.use(session({
   key:"userId",
   secret:"subscribe",
   resave:false,
   saveUninitialized:false,
   cookie:{
      expires:60 * 60 *24,
   },
}));

*/

//fetching data from registration url and then insert that data into database
app.post('/registration',registration.insert);

app.post('/login', login.ValidateUser);

const upload=multer();
app.post('/GigDetail',upload.single("file"),GigDetail.insert);

app.post('/Gig',GigDetail.retrive);
app.get('/GigAll',GigDetail.retriveAll);

app.post('/PostProject',PostProject.insert);
app.post('/Browse',PostProject.findall);
app.get('/Browse/:id',PostProject.findOne);

app.post('/OfferList',OfferList.fetch);
app.get('/OfferList/:id',OfferList.fOne);


app.post('/Bid',BidServer.insert);


// this is the server running code
var server = app.listen(3001, function () {
   console.log("Example app listening at http://%s:%s", host, port)
})



