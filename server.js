var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'assets')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'assets/home.html'));
});
app.get('/about', function(req, res){
res.sendFile(path.join(__dirname, 'assets/about.html'));
});
app.get('/about', function(req, res){
res.sendFile(path.join(__dirname, 'assets/about.html'));
});
app.get('/seasonsofglass', function(req, res){
res.sendFile(path.join(__dirname, 'assets/seasonsofglass.html'));
});
app.get('/flowerbud', function(req, res){
res.sendFile(path.join(__dirname, 'assets/flowerbud.html'));
});
app.get('/snowflake', function(req, res){
res.sendFile(path.join(__dirname, 'assets/snowflake.html'));
});
app.get('/awakening', function(req, res){
res.status(404).sendFile(path.join(__dirname, 'assets/awakening.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});