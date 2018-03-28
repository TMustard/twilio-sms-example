// Twilio Credentials
const accountSid = process.env.SID;
const authToken = process.env.AUTH_TOKEN;

// require the Twilio module and create a REST client
const client = require("twilio")(accountSid, authToken);

client.messages.create(
  {
    to: "+3133302506",
    from: "+13134869690",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?"
  },
  (err, message) => {
    console.log(message.sid);
  }
);

// "+19186300948"
