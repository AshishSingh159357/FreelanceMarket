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

conn.connect();

exports.find=function(req,respond){
    let sql="Select Gig_id from tags where Tags='"+req.body.tag+"' ";


    conn.query(sql,(err,result)=>{


        if(err){
            console.log("Hey,Their is error While Searching Gig id in tags");
        }
        else{
            var values=[];
            for(var i=0;i<result.length;i++){
                values.push(result[i].Gig_id);
            }
            conn.query("Select * from gig where GigId in (?)",[values],(err,result)=>{
                if(err){
                    console.log(err);
                }
                else{
                  
                    respond.send(result);
                }
            });

           
        }
    })


}