let express = require('express');
let app = express();
console.log("Hello World");
const path = __dirname + "/views/index.html";

function handler(req, res){
  res.send("Hello Express");
}

function handler2(req, res){
  res.sendFile(path);
}


// app.get("/", handler);

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
app.get("/", handler2)

































 module.exports = app;
