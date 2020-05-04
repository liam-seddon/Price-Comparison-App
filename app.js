//Creating Session Management
//var session = require('express-session');
//app.use(session({
  //secret: '',
  //resave: false,
  //saveUninitialized: true,
  //cookie: { maxAge: 60000 }
/}))

//Storing Session VALUES
//var sess = req.session;  //initialize session variable
//req.session.userId = results[0].id; //set user id
//req.session.user = results[0];//set user name

//Getting Session Value
//var userId = req.session.userId;

//Destroying Session VALUES
//req.session.destroy(function(err) {
  // })

//Setting vars
var mysql = require('mysql');
var express = require('express');
var path = require('path');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');


//Setting Up Enviroments / Server
app.set('port', (process.env.PORT || 8080));
app.set('views',__dirname +'/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));




app.get ('/', function(request, response){
  response.render ('Shopping_Area');
});

app.listen(app.get('port'), function(){
  console.log('Price Comparison App is running', app.get('port') )
});
app.get('/', routes.index); //Call My Index Page
app.get('/login', routes.login); //Call My Login PAGE
app.post('/login', user.login); // calling login page post
app.get('/Register', routes.Register); //Call My register PAGE
app.post('/Register', user.Register); //Calling register page pst

app.get('/Shopping_Area', user.Shopping_Area); //Call My shopping area PAGE
