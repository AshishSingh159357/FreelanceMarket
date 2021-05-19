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
exports.fetch=function(req,respond){
    let sql="Select * from complete_project where freelancer='"+respond.body.freelancer+"'";

    conn.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{

          respond.send(result);
            
        }
    })



}