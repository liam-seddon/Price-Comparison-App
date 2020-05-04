const mysql = require('mysql');
const dbCongfig = require("../config/db.config.js");

//Creating Database Connection
const connection = mysql.createConnection({
  host : db.config.HOST,
  user : db.config.USER,
  host : db.config.PASSWORD,
  user : db.config.DB,
});

connection.Connect = mysql.createConnection({
  if (error) throw error;
  console.log("Succesfully COnnected To The Database")
});

module.exports = conenction;
