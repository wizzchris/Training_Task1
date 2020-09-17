var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/database', function(req, res){
   res.render('database');
});

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});
