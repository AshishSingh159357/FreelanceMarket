var mysql = require("mysql");
//var express = require('express');
//var app = express();
//var cookieParser=require('cookie-parser');
//var session = require('express-session');
//const cors=require('cors');


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
 
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "freelancemarket"
})
conn.connect();



exports.ValidateUser = function (req, respond) {


    var sql = "SELECT * FROM user where username='"+req.body.username+"' and password='"+req.body.password+"'";
    //var sql = "SELECT * FROM user where username='jj' and password='jv'";

   
    conn.query(sql, (err, result) => {
        if (err) {
            console.log("query error during validatin user");
        }
        else {
            if(result[0]){
                //req.session.user = result[0]
               // console.log(req.session.user);
                respond.send(true);
            }
            else{
                respond.send(false);
            }
           
        }

    })





    /*
   var username, password;

   var sql = "SELECT * FROM user where username='"+req.body.username+"' and password='"+req.body.password+"'";

   conn.connect((err) => {
       if (err) {
           console.log("connection error while validating user data", err);
       }
       else {
           conn.query(sql, (err, result) => {
               if (err) {
                   console.log("query error during validatin user");
                   respond.send("not ok");
                   conn.end();

               }
               else {
                  respond.send("ok");
                  conn.end();
               }

           })
       }
   })
*/
   

}