require('dotenv').config()
let express = require('express');
const bodyParser = require("body-parser");
let app = express();
console.log("Hello World");
const path = __dirname + "/views/index.html";

function handler(req, res){
  res.send("Hello Express");
}

function handler2(req, res){
  res.sendFile(path);
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get("/", handler);

// root middleware function
app.use((req, res, next) => {
  console.log( `${req.method} ${req.path} - ${req.ip}`)
  next()
})

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
app.get("/", handler2)

app.get("/json", (req, res) => {
  let response;
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello Json".toUpperCase();
  } else {
    response = "Hello json";
  }
  res.json({"message": response});
})

app.get(
  '/now',
  (req, res, next) => {
    req.time = new Date().toString();
    next()
  },
  (req, res) => {
    res.json({"time": req.time})
  }
)

app.get(
  "/:word/echo",
  (req,res) => {
    res.json({"echo": req.params.word})
  }
)

app.route("/name")
  .get(
    (req,res) => {
      let fullName = `${req.query.first} ${req.query.last}`
      res.json({"name" : fullName})
    }
  )
  .post(
    (req, res) => {
      let fullName = `${req.body.first} ${req.body.last}`
      res.json({"name" : fullName})
  }
)





























 module.exports = app;
