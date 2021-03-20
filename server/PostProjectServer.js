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





exports.insert = function(req,response){

    var username=req.body.username;
    var skills=req.body.gigSkill;
    skills=skills.split(",");
    var values=[];
   
   
    //variable that should be added into user table 


 
    let sql = "INSERT INTO project_post(Project_name,Project_Desc,Duration,budget,Username) VALUES ('"+ req.body.Title +"','"+ req.body.Description +"','"+ req.body.DeliveryTime +"','"+  req.body.Pricing +"','" + username + "')";
  
  
            conn.query(sql, (err, result) => {
                if (err) {
                    console.log("error is in query while inserting in postProject",err);
                }
                else {
                    console.log("Project Record Updated");
                }
            })
         

           let sql2="select max(Project_id) as id from project_post";

    
            conn.query(sql2,(err, result) => {
                if (err) {
                    console.log("error is in query while inserting in postProject",err);
                }
                else {
                    for(var i=0;i<skills.length;i++)
                    {
                        values.push([result[0].id,skills[i]]);
                    }
                   conn.query("Insert into post_project_skill(Post_Project_Id,Skill) values ?",[values])  ;           
                }
            })    

}








exports.findall=function(req,respond){

    sql="SELECT * FROM project_post";

    conn.query(sql,(err,result)=>{
        if(err)
        {
            console.log("err while finding in project_post table");
        }
        else{
            respond.send(result);
            
        }

    })

}



exports.findOne=function(req,respond){
    

let id = req.params.id;


    sql="SELECT * FROM project_post where Project_name='"+ id +"' ";

    conn.query(sql,(err,result)=>{
        if(err)
        {
            console.log("err while finding specific project_post table");
        }
        else{
            respond.send(result[0]);
            console.log(result[0]);
        }
    })

}








/*

exports.findMaxId=function(req,respond){

    sql="SELECT max(Project_id) as id FROM project_post";

    conn.query(sql,(err,result)=>{
        if(err)
        {
            console.log("err while finding in project_post table");
        }
        else{
          
            respond.send(result);
            
        }

    })

}
*/