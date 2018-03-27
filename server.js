// var http = require("http");
// var express = require("express");
// var twilio = require("twilio");
//
// var app = express();
//
// app.post("/sms", function(req, res) {
//   var twilio = require("twilio");
//   var twiml = new twilio.TwimlResponse();
//   twiml.message("It worked!");
//   res.writeHead(200, { "Content-Type": "text/xml" });
//   res.end(twiml.toString());
// });
//
// http.createServer(app).listen(process.env.PORT || 1337, function() {
//   console.log("Express server listening on port 1337");
// });

const http = require("http");
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const app = express();
app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message("HIHIHIH");
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

http.createServer(app).listen(process.env.PORT || 1337, function() {
  console.log("Express server listening on port 1337");
});
