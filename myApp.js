let express = require("express");
require('dotenv').config()
let app = express();

console.log("Hello World");







// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  const message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message.toUpperCase();
    res.json({
      message: message
    });

  } else {
    res.json({
      message: message
    });
  }
});

module.exports = app;
