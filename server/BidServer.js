var express = require('express');
var app = express();
var mysql = require('mysql');


// database connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "freelancemarket"
})

conn.connect();

exports.insert = function(req,response){

   
    var username=req.body.BidUsername;
    //console.log(req.body);
    //variable that should be added into user table 


    // Inserting data into database in user table
   // let values = [localStorage.getItem("token"), req.body.gigTitle, password, fullname, mobile];
    let sql = "INSERT INTO Bid_Project(Post_Project_id,Amount,Delivery_Time,Description,Bid_Username) VALUES ('"+ req.body.PostProjectId +"','"+ req.body.Price +"','"+ req.body.Duration +"','"+  req.body.Description +"','" + username + "')";
   // let sql = "INSERT INTO gig(GigId,UserName,GigTitle,GigDescription,Pricing,GigStatus,DeliveryTime,Revision,Requirement,Impression,Clicks,DateTime) VALUES (12,'qwaszx','ds')";

  
            conn.query(sql, (err, result) => {
                if (err) {
                    console.log("error is in query while inserting in postProject",err);
                }
                else {
                    console.log("Project Record Updated")
                   
                }

            })

}

