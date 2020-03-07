var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "eu-cdbr-west-02.cleardb.net",
  user: "b609bd1be3d6c0",
  password: "53470153",
  database: "Price_Comparison_App_DB"
});

connection.connect(function(err){
  if (!err {
    console.log("Database Is Connected");
  } else {
    console.log("Error Connecting To The Database");
  }
});

module.exports = connection;
