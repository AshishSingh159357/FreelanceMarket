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

exports.fetch=function(req,respond){
/*
    let id;
    let sql1="select Project_id from project_post where Username='"+ req.body.user +"'  ";
    conn.query(sql1, (err, result) => {
        if (err) {
            console.log("error is in query while fetching Project_id from Porject Post",err);
        }
        else {
          
            //console.log(result[0].Project_id);
            
            id=2;
           
        }

     } )*/

    let sql="Select * from bid_project inner join project_post on bid_project.Post_Project_id=project_post.Project_id where project_post.Username='"+req.body.user+"'   ";
     

    conn.query(sql, (err, result) => {
        if (err) {
            console.log("error is in query while fetching Offer",err);
        }
        else {
            console.log("Offer list fetch successfully");
            console.log(result);
            respond.send(result);
           
        }

    })

}




exports.fOne=function(req,respond){
    

    let id = req.params.id;
    
    
        sql="Select * from bid_project where Bid_Username='"+ id +"' ";
    
        conn.query(sql,(err,result)=>{
            if(err)
            {
                console.log("err while finding specific Bid_project table");
            }
            else{
               console.log(result)
                respond.send(result[0]);
               
            }
        })
    
}
