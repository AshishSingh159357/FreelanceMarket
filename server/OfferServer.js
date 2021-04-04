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

    console.log(req.body.user)
    let sql="Select * from bid_project inner join project_post on bid_project.Post_Project_id=project_post.Project_id where project_post.Username='"+req.body.user+"' ";
     

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
    
    
        sql="Select * from bid_project where Post_Project_id='"+ id +"' ";
    
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
