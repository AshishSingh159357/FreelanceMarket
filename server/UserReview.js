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
    sql="select * from review where freelancer='"+req.body.username+"' ";
    conn.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(result);
            respond.send(result);
        }
    })
}