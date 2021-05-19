var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const Razorpay = require('razorpay')
//var cookieParser=require('cookie-parser');
//var session = require('express-session');



var mysql = require('mysql');

const conn = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "freelancemarket"
})

conn.connect();




const razorpay = new Razorpay({
   key_id: 'rzp_test_xAFR31hwFzwh7u',
   key_secret: '5IuX3KSHRwJtUXYvl2v80rzL',
});



// All user-defeind module 
var registration = require('./RegistrationServer');
var login = require('./LoginServer');
var GigDetail = require("./GigDetailServer");
var PostProject = require("./PostProjectServer");
var BidServer = require("./BidServer");
var OfferList = require("./OfferServer");
var SearchPostProject = require("./SearchPostProject");
var ActiveProject = require("./ActiveProjectServer");
var dashboard = require("./DashboardServer");
var SearchGigServer = require("./SearchGigServer");
var review = require("./Review");
var UserReview = require("./UserReview");
var CompletProject = require("./CompletProject");

// declaration of host and port for server
var host = 'localhost';
var port = 3001;



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));




// parse application/json
app.use(bodyParser.json());
app.use(cors());

//fetching data from registration url and then insert that data into database
app.post('/registration', registration.insert);
app.post('/login', login.ValidateUser);


const upload = multer();
app.post('/GigDetail', upload.single("file"), GigDetail.insert);

app.post('/Gig', GigDetail.retrive);
app.get('/GigAll', GigDetail.retriveAll);

app.post('/PostProject', PostProject.insert);



app.post('/Browse', PostProject.findall);
app.get('/Browse/:id', PostProject.findOne);
//app.get('/PostProject/MaxId',PostProject.findMaxId);
app.post('/SearchValue', SearchPostProject.find);

app.post('/OfferList', OfferList.fetch);
app.get('/OfferList/:id', OfferList.fOne);
app.post('/ActiveProject', ActiveProject.update);
app.post('/ActiveProjectList', ActiveProject.fetch);



app.post('/Bid', BidServer.insert);


app.post('/dashboard', dashboard.findall)
app.post('/SearchGig', SearchGigServer.find)


app.post("/Review/:id", review.insert);
app.post("/Cancel/:id", review.cancel);
app.post("/UserReviews", UserReview.findall);
app.post("/GigDelete", GigDetail.delete);

app.post("/completeProject", CompletProject.fetch);






var amountToPay;

//fetchin amount to pay from server
app.post("/amountTopay", (req, res) => {
  
   let sql = "select * from freelancer_active_project where Post_Project_id='" + req.body.id + "' ";
   conn.query(sql, (err, result) => {
      if (err) {
         console.log(err);
      }
      else {
         //  console.log(result[0].Amount);
         amountToPay = result[0].Amount
      }
   })
})

// Payment Integration
app.post('/razorpay', async (req, res) => {

   const payment_capture = 1;
   const amount = amountToPay.toString();
   const currency = 'INR'
   try {
      const response = await razorpay.orders.create({ amount: amount * 100, currency, receipt: 1, payment_capture });
      console.log(response);
      res.json({
         id: response.id,
         currency: 'INR',
         amount: response.amount
      })

   } catch (error) {
      console.log(error)
   }
})


// this is the server running code
var server = app.listen(3001, function () {
   console.log("Example app listening at http://%s:%s", host, port)
})



