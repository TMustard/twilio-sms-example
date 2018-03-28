const http = require("http");
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser());

app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message("Working!");
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
  console.log(req.body.Body);
});

http.createServer(app).listen(process.env.PORT || 1337, function() {
  console.log("Express server listening on port 1337");
});
