//settign variable to HHTP
var http = require("http");
var fs =require("fs");
//When using heroku it uses the availble online port and also the option of using the local port
const PORT = process.env.PORT || 8080;

http.createServer (function (request, response){
  //Sends a http header
  //Returns HTTP status as 200 which is okay

  //writing to our server
  resposne.wrtieHead(200,{
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin' : '*'
  });
  var readStream = fs.readStream(__dirname + 'index.html');
  //Send a Message
  readStream.pipe(response);
}).listen(PORT);
