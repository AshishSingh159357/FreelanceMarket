var express = require('express');
var app = express();
var p = require("./practice");
var mysql = require('mysql');


// database connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "freelancemarket"
})



// this is the function to insert user data in to database
exports.insert = function (req, res) {


    
    //variable that should be added into user table 
    var username, password, fullname, mobile, email;


    username = req.body.username;
    password = req.body.password;
    fullname = req.body.fullname;
    mobile = req.body.mobile;
    email = req.body.email;

    console.log('-------------', req.body);



    // Inserting data into database in user table
    let values = [username, email, password, fullname, mobile];
    let sql = "INSERT INTO user(username,email,password,fullname,mobile) VALUES ('" + username + "','" + email + "','" + password + "','" + fullname + "','" + mobile + "')";

    conn.connect((err) => {
        if (err) {
            console.log("error in connection while inserting data into user table");
        }
        else {
            conn.query(sql, values, (err, res) => {
                if (err) {
                    console.log("error is in query");
                }
                else {
                    console.log("Record Updated")
                    console.log(res.affectedRows)
                    conn.end()

                }

            })
        }
    })
    


}