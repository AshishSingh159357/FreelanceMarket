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
   

    console.log(req.body.Price)
    let sql1='select * from bid_project where '
    let sql = "INSERT INTO Bid_Project(Post_Project_id,Amount,Delivery_Time,Description,Bid_Username) VALUES ('"+ req.body.PostProjectId +"','"+ req.body.Price +"','"+ req.body.Duration +"','"+  req.body.Description +"','" + username + "')";
   
  
            conn.query(sql, (err, result) => {
                if (err) {
                    console.log("error is in query while inserting in postProject",err);
                }
                else {
                    console.log("Project Record Updated")
                   
                }

            })

}

