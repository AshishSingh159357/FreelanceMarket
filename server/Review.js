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



exports.insert=function(req,respond){
    var id=req.params.id;

    let sql="insert into complete_project select freelancer_active_project.Active_Project_id,project_post.Project_id,project_post.Project_name,project_post.Project_Desc,freelancer_active_project.Amount,project_post.Username,freelancer_active_project.Bid_Username from project_post inner join freelancer_active_project on project_post.Project_id=freelancer_active_project.Post_Project_id where project_post.Project_id='"+id+"' ";
    conn.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
        }
    })


    let sql2="select Post_Project_id,Buyer,freelancer from complete_project where Post_Project_id='"+req.params.id+"' ";
    conn.query(sql2,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            
            let sql3="insert into review(Project_id,rating,comment,buyer,freelancer) values('"+result[0].Post_Project_id+"','"+3+"','"+req.body.comment+"','"+result[0].Buyer+"','"+result[0].freelancer+"')";
            conn.query(sql3,(err,result)=>{
                if(err){
                    console.log(err);
                }
                else{



                    //console.log('ok');
                    conn.query("delete from post_project_skill where Post_Project_Id='"+req.params.id+"' ",(err,result)=>{
                        if(err){
                            console.log(err);
                        }
                        else{



                            conn.query("delete from project_post where Project_id='"+req.params.id+"'",(err,result)=>{
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    conn.query("delete from freelancer_active_project where Post_Project_id='"+req.params.id+"'",(err,result)=>{
                                        if(err){
                                            console.log(err);
                                        }
                                        else{
                                            console.log("ok completed");
                                        }
                                    })
                                    
                                }
                            })




                        }
                    })




                  
                }
            })
        }
    })

}





exports.cancel=function(req,respond){
    var id=req.params.id;

    conn.query("delete from post_project_skill where Post_Project_Id='"+req.params.id+"' ",(err,result)=>{
        if(err){
            console.log(err);
        }
        else{



            conn.query("delete from project_post where Project_id='"+req.params.id+"'",(err,result)=>{
                if(err){
                    console.log(err);
                }
                else{
                    conn.query("delete from freelancer_active_project where Post_Project_id='"+req.params.id+"'",(err,result)=>{
                        if(err){
                            console.log(err);
                        }
                        else{
                            console.log("ok cancel");
                        }
                    })
                    
                }
            })

        }
    })



}