var express = require('express');
var app = express();
var mysql = require('mysql');
const url = require('url');
const querystring = require('querystring');

// database connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "freelancemarket"
})

conn.connect();

exports.find=function(req,respond){
        let sql="Select Post_Project_Id from post_project_skill where Skill='"+req.body.SearchValue+"'";

    //let sql1="Select * from project_post where Project_id="

    conn.query(sql,(err,result)=>{
        if(err){
            console.log("Hey,Their is error While Searching Post Project");
        }
        else{
            var values=[];
            for(var i=0;i<result.length;i++){
                values.push(result[i].Post_Project_Id);
            }
            conn.query("Select * from project_post where Project_id in (?)",[values],(err,result)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(result);
                    respond.send(result);
                }
            });

           
        }
    })
}