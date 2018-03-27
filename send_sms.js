// Twilio Credentials
const accountSid = "AC319495eede45ee98eefef27a934def54";
const authToken = "717aae47f48055875e5aa62cf0101a1d";

// require the Twilio module and create a REST client
const client = require("twilio")(accountSid, authToken);

client.messages.create(
  {
    to: "+19186300948",
    from: "+13134869690",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?"
  },
  (err, message) => {
    console.log(message.sid);
  }
);
