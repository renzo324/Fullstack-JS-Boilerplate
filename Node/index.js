import 'mysql';
//connection
const conn= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
});

//Connection
conn.Connect(function(err){
if (err) throw err;
//else do database things

});