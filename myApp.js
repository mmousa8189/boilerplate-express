let express = require("express");
require('dotenv').config();
let app = express();

console.log("Hello World");





app.use((req, res, next) => {
	let string = req.method + " " + req.path + " - " + req.ip;
	console.log(string);
	next();
});

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
	res.json({message: "Hello json"});
});
// app.get("/json", (req, res) => {
//   let message = "Hello json";
//   console.log(process.env.MESSAGE_STYLE);
//   if (process.env.MESSAGE_STYLE === 'uppercase') {
//     message = message.toUpperCase();
//     console.log(message);
//     res.json({
//       message: message
//     });

//   } else {
//     res.json({
//       message: message
//     });
//   }
// });

module.exports = app;
