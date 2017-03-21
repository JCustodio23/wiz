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
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/generic', function(req, res){
res.sendFile(path.join(__dirname, 'generic.html'));
});
app.get('/blacc', function(req, res){
res.sendFile(path.join(__dirname, 'blacc.html'));
});
app.get('/contact', function(req, res){
res.sendFile(path.join(__dirname, 'contact.html'));
});
app.get('/elements', function(req, res){
res.sendFile(path.join(__dirname, 'elements.html'));
});
app.get('/khalifa', function(req, res){
res.sendFile(path.join(__dirname, 'khalifa.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});