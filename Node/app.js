const mysql = require('mysql');
//connection
const conn= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
    // database: ""
});

//Connection
conn.connect(function(err){
//check for errors
if (err) throw err;
//else do database things
console.log("Connection complete");
});