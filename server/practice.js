/*
var mysql=require("mysql");

var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"freelancemarket"
})

//var ValidateUser=function(req,res){
  //  var username,password;

    var sql="SELECT * FROM user";

    conn.connect((err)=>{
        if (err){
            console.log("connection error while validating user data",err);
        }
        else{
            conn.query(sql,(err,res)=>{
                if(err){
                    console.log("query error during validatin user");
                }
                else{
                   // username="k";
                    //password="l";
                    //conn.end();
                    console.log(res);
                    conn.end();
                }

            })
        }
    })

   
    if (username==req.username){
        res.send(req.username);
    }
    else{
        res.send("f");
    }
*/