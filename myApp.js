let express = require('express');
let app = express();
console.log("Hello World");
const path = __dirname + "/views/index.html"

function handler(req, res){
  res.send("Hello Express");
}

function handler2(req, res){
  res.sendFile(path);
}


// app.get("/", handler);

app.get("/", handler2)


































 module.exports = app;
