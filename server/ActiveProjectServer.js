var express = require('express');
var app = express();
var mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "freelancemarket"
})

conn.connect();

exports.update=function(req,respond){
    console.log(req.body.Project_id);
    let sql1="delete from bid_project where Post_Project_id='"+req.body.Project_id+"'";
    conn.query(sql1,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("deleted successfully");

        }
    })

    let sql2="update project_post set Project_Status='"+ 1 +"' where Project_id='"+ req.body.Project_id +"'";
    conn.query(sql2,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("updated successfully");
            respond.send("1");

        }
    })

}


exports.fetch=function(req,respond){
    let sql="select * from project_post where Project_Status='"+1+"' ";
    conn.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            respond.send(result);
        }
    })
}