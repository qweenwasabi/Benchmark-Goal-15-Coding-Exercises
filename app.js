var express = require('express');
var app = express();
var path = require('path');
var GuessTheNumber = require('./lib/GuessTheNumber').guess



app.use(express.static(path.join(__dirname, 'lib')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html')
})

app.listen(3000, function(){
  console.log('app listening on port 3000!')
})

exports = module.exports = app;
