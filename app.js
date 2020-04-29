var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

//Creating Database Connection
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: '',
  database : 'users'
});

connection.connect();

global.db =connect();

//Setting Up Enviroments / Server
app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/'));

app.set('/', __dirname + "/index");
app.set('view engine', 'ejs');

app.get ('/', function(request, response){
  response.render ('index');
});

app.listen(app.get('port'), function(){
  console.log('Price Comparison App is running', app.get('port') )
});

app.get('/', routes.index); //Call My Index PAGE
app.get('/', routes.Register); //Call My register PAGE

app,post('/login', user.login); //Calling login POST
