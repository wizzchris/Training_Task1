var express = require('express');
var app = express();
var router = express.Router();


app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/database', function(req, res){
   res.render('database');
});
app.post('/database', (req, res) => {
    res.json(req.body);
});

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});
module.exports = router;
