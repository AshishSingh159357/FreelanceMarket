var express = require('express');
var app = express();
var p = require("./practice");
var mysql = require('mysql');
const multer=require('multer');


// database connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "freelancemarket"
})

conn.connect();



// this is the function to insert user data in to database
exports.insert = function (req, respond) {




    var GigStatus=true;
    var Impression=0;
    var Clicks=0;
    var username=req.body.username;
    console.log(req.body)
    console.log("file===",req.body.file);
   
    var tags=req.body.gigTag.split(",");
    values=[];



    // Inserting data into database in user table
   // let values = [localStorage.getItem("token"), req.body.gigTitle, password, fullname, mobile];
    let sql = "INSERT INTO gig(UserName,GigTitle,GigDescription,Pricing,GigStatus,DeliveryTime,Revision,Requirement,Impression,Clicks) VALUES ('" + username + "','" + req.body.gigTitle + "','" + req.body.gigDescription + "','" + req.body.gigPricing + "','" + GigStatus + "','" + req.body.gigDeliveryTime + "','" + req.body.gigRevision + "','" + req.body.gigRequirement + "','"+ Impression +"','"+ Clicks +"')";
   
            conn.query(sql, (err, result) => {
                if (err) {
                    console.log("error is in query",err);
                    respond.send("0");
                }
                else {
                    console.log("Gig Record Updated");
                    respond.send("1");
                    
                }
            })


            
           let sql2="select max(GigId) as id from gig";

    
           conn.query(sql2,(err, result) => {
               if (err) {
                   console.log("error is in query while inserting in postProject",err);
               }
               else {
                   for(var i=0;i<tags.length;i++)
                   {
                       values.push([result[0].id,tags[i]]);
                   }
                  conn.query("Insert into tags(Gig_id,Tags) values ?",[values])  ;           
               }
           })    
}





exports.retrive = function(req,respond){

    let sql='SELECT GigTitle,Impression,Clicks FROM gig where username="'+ req.body.username +'"';

    conn.query(sql, (err, result) => {
        if (err) {
            console.log("error is in query",err);
        }
        else {
            console.log("retrive all specific data for Gig")
           
            respond.send(result);
        }

    })
}


exports.retriveAll = function(req,respond){

    let sql='SELECT UserName,GigTitle,Pricing FROM gig';

    conn.query(sql, (err, result) => {
        if (err) {
            console.log("error is in query",err);
        }
        else {
            console.log("retrive all data for Gig")
           
            respond.send(result);
        }

    })
}




exports.delete=function(req,respond){
    console.log(req.body.id)
    sql="delete from gig where GigId='"+req.body.id+"' ";
    conn.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("gig deleted")
        }
    })
}