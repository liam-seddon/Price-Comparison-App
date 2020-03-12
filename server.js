//settign variable to HHTP
var http = require("http");
var fs =require("fs");
var express=require("express");
var body-parser=require("body-parser");

var connection = require("js/config.js");



http.createServer (function (request, response){
  //Sends a http header
  //Returns HTTP status as 200 which is okay

  //writing to our server
  resposne.wrtieHead(200,{
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin' : '*'
  });
  var readStream = fs.readStream(__dirname + '/Index.html');
  //Send a Message
  readStream.pipe(response);
}).listen(PORT);
