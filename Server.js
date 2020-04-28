var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + 'Index.html'));

app.get ('/', function(request, response){
  response.render ('Index.html');
});

app.listen(app.get('port'), function(){
  console.log('Price Comparison App is running', app.get('port') )
});
