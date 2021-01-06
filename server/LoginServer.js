var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "freelancemarket"
})
conn.connect();
exports.ValidateUser = function (req, respond) {


    var sql = "SELECT * FROM user where username='"+req.body.username+"' and password='"+req.body.password+"'";
    //var sql = "SELECT * FROM user where username='jj' and password='jv'";

   
    conn.query(sql, (err, result) => {
        if (err) {
            console.log("query error during validatin user");
        }
        else {
            if(result[0]){
                respond.send("true");
            }
            else{
                respond.end("false");
            }
           
        }

    })





    /*
   var username, password;

   var sql = "SELECT * FROM user where username='"+req.body.username+"' and password='"+req.body.password+"'";

   conn.connect((err) => {
       if (err) {
           console.log("connection error while validating user data", err);
       }
       else {
           conn.query(sql, (err, result) => {
               if (err) {
                   console.log("query error during validatin user");
                   respond.send("not ok");
                   conn.end();

               }
               else {
                  respond.send("ok");
                  conn.end();
               }

           })
       }
   })
*/
   

}