var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');


app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/database', function(req, res){
   res.render('database');
});

mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/mydatabase");

var nameSchema = new mongoose.Schema({
 firstName: String,
 lastName: String
});

var User = mongoose.model("User", nameSchema, "ths");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/database", (req, res) => {
 var myData = new User(req.body);
 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});

app.get("/getdetails", function (req, res) {
    User.find({}, function(err, users) {
    if (err) throw err;
    // object of all the users
    res.render('index',{users:users});
})
});
app.listen(3000, function() {
  console.log('App listening on port 3000!');
});
