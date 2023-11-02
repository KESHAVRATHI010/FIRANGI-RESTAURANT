var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const port=process.env.PORT || 3000
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://127.0.0.1:27017/Firangi");

var db = mongoose.connection;

db.on("error", () => console.log("Error in Connecting to Database"));
db.once("open", () => console.log("Connected to Database"));

app.post("/sign_up", (req, res) => {
  var Fname = req.body.Fname;
  var Emailid = req.body.Emailid;
  var date = req.body.date;
  var select = req.body.select;
  var messages = req.body.messages; 

  var data = {
    Fname: Fname,
    Emailid: Emailid,
    date: date,
    select: select,
    messages: messages,
  };

  db.collection('Booktable').insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record Inserted Successfully");
  });
  return res.redirect("index.html");
});

app.get("/", (req, res) => {
    res.set({
      "Allow-access-Allow-Origin": "*",
    });
    return res.redirect("booktable.html");
  })
  .listen(port);

console.log("Listening on PORT 3000");
