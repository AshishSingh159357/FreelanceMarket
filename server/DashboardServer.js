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

exports.findall=function(req,respond){
    
    var values=[];

    let sql=' select Post_Project_id from freelancer_active_project where Bid_Username="'+req.body.username+'" ';
    conn.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{

            // console.log(result[0].Post_Project_id);

            for(var i=0;i<result.length;i++)
            {
                values.push(result[i].Post_Project_id);
            }

            conn.query(" select * from project_post where Project_Status='"+1+"' and Project_id in (?)",[values],(err,result)=>{
                if(err){
                    console.log(err);
                }
                else{                   
                    respond.send(result);
                }
            })
            
        }
    })

}