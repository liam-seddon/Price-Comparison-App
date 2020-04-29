//Creating Session Management
var session = require('express-session');
app.use(session({
  secret: '',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

//Storing Session VALUES
var sess = req.session;  //initialize session variable
req.session.userId = results[0].id; //set user id
req.session.user = results[0];//set user name

//Getting Session Value
var userId = req.session.userId;

//Destroying Session VALUES
req.session.destroy(function(err) {
   })

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
app.get('/', user.Shopping_Area); //Call My shopping area PAGE

app,post('/index', user.login); //Calling login POST
app.post('/Register', user.Register); //Calling Register POST
