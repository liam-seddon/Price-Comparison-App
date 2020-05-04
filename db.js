//Setting vars
var mysql = require('mysql');
var express = require('express');
var path = require('path');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');


//Creating Database Connection
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: '',
  database : 'users'
});

connection.connect();

global.db =connect();
