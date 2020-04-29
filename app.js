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
app.set('views',__dirname +'/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));




app.get ('/', function(request, response){
  response.render ('index');
});

app.listen(app.get('port'), function(){
  console.log('Price Comparison App is running', app.get('port') )
});
app.get('/', routes.index); //Call My Index Page
app.get('/', routes.login); //Call My Login PAGE
app.get('/', routes.Register); //Call My register PAGE
app.get('/', routes.Shopping_Area); //Call My shopping area PAGE

app,post('/login', user.login); //Calling login POST
app.post('/Register', user.Register); //Calling Register POST
