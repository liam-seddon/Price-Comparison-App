var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/'));

app.set('/', __dirname + "/");
app.set('view engine', 'ejs');

app.get ('/', function(request, response){
  response.render ('index');
});

app.listen(app.get('port'), function(){
  console.log('Price Comparison App is running', app.get('port') )
});
