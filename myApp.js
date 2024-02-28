let express = require("express");
let app = express();

console.log("Hello World");







// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});

module.exports = app;
